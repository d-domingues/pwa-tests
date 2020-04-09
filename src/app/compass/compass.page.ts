import { Component, ElementRef, ViewChild } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Geolocation, GeolocationPosition, Modals } from '@capacitor/core'
import { MenuController } from '@ionic/angular'
import { bindCallback, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

declare var google

@Component({
	templateUrl: 'compass.page.html',
	styleUrls: ['compass.page.scss']
})
export class CompassPage {
	position: GeolocationPosition

	// Firebase Data
	locations: Observable<any>
	locationsCollection: AngularFirestoreCollection<any>

	// Map related
	@ViewChild('map', { static: false }) mapElement: ElementRef
	map: any
	markers = []

	// Misc
	isTracking = false
	watch: string
	user = null

	// LinePath
	linePath
	pathCoordinates: { lat: number; lng: number }[] = []

	constructor(
		private fbAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private menu: MenuController
	) {
		this.anonymousLogin()
	}

	ionViewWillEnter() {
		this.watchPosition().subscribe(
			(position: GeolocationPosition) => (this.position = position)
		)

		this.initMap()
		this.setTracker()
	}

	openMenu() {
		this.menu.open('side-menu')
	}

	// formats calbackFn data as an Observable
	watchPosition(): Observable<any> {
		return bindCallback(Geolocation.watchPosition)({})
	}

	private anonymousLogin() {
		this.fbAuth.auth.signInAnonymously().then(res => {
			this.user = res.user

			this.locationsCollection = this.afs.collection(
				`locations/${this.user.uid}/track`,
				ref => ref.orderBy('timestamp')
			)

			// Make sure we also get the Firebase item ID!
			this.locations = this.locationsCollection.snapshotChanges().pipe(
				map(actions =>
					actions.map(a => {
						const data = a.payload.doc.data()
						const id = a.payload.doc.id
						return { id, ...data }
					})
				)
			)

			// Update Map marker on every change
			/* 			this.locations.subscribe(locations => {
				this.updateMap(locations)
			}) */
		})
	}

	// Initialize a blank map
	private initMap() {
		const mapOptions = {
			// center:  new google.maps.LatLng(38.7121152, -9.125888),
			zoom: 18,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

		this.watch = Geolocation.watchPosition({}, (position, err) => {
			if (position) {
				this.map.setCenter({
					lat: position.coords.latitude,
					lng: position.coords.longitude
				})
			}
		})
	}

	private setDrawer() {
		const drawingManager = new google.maps.drawing.DrawingManager({
			drawingMode: google.maps.drawing.OverlayType.MARKER,
			drawingControl: true,
			drawingControlOptions: {
				position: google.maps.ControlPosition.TOP_CENTER,
				drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
			},
			markerOptions: {
				icon:
					'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
			},
			circleOptions: {
				fillColor: '#ffff00',
				fillOpacity: 1,
				strokeWeight: 5,
				clickable: false,
				editable: true,
				zIndex: 1
			}
		})

		// drawingManager.setMap(this.map)
	}

	private setTracker() {
		/* 		this.pathCoordinates = [
			{ lat: 38.71, lng: -9.201 },
			{ lat: 38.735, lng: -9.245 },
			{ lat: 38.775, lng: -9.26 },
			{ lat: 38.805, lng: -9.31 },
			{ lat: 38.825, lng: -9.36 },
			{ lat: 38.865, lng: -9.385 }
		]
 */
		this.linePath = new google.maps.Polyline({
			// path: this.pathCoordinates,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		})

		this.linePath.setMap(this.map)
	}

	// Use Capacitor to track our geolocation
	startTracking() {
		this.isTracking = true

		this.watch = Geolocation.watchPosition({}, (position, err) => {
			if (position) {
				this.addNewLocation(
					position.coords.latitude,
					position.coords.longitude,
					position.timestamp
				)

				this.pathCoordinates = [
					...this.pathCoordinates,
					{ lat: position.coords.latitude, lng: position.coords.longitude }
				]

				this.updateTracker()
			}
		})
	}

	private updateTracker() {
		this.linePath.setPath(this.pathCoordinates)

		/* 		const path = [
			{ lat: 38.71, lng: -9.201 },
			{ lat: 38.735, lng: -9.245 },
			{ lat: 38.775, lng: -9.26 },
			{ lat: 38.805, lng: -9.31 },
			{ lat: 38.825, lng: -9.36 },
			{ lat: 38.865, lng: -9.385 }
		]

		this.linePath.setPath(path) */
	}

	// Unsubscribe from the geolocation watch using the initial ID
	stopTracking() {
		this.pathCoordinates = []

		Geolocation.clearWatch({ id: this.watch }).then(() => {
			this.isTracking = false
		})
	}

	// Save a new location to Firebase and center the map
	addNewLocation(lat, lng, timestamp) {
		this.locationsCollection.add({
			lat,
			lng,
			timestamp
		})

		const position = new google.maps.LatLng(lat, lng)
		this.map.setCenter(position)
		this.map.setZoom(5)
	}

	// Delete a location from Firebase
	deleteLocation(pos) {
		this.locationsCollection.doc(pos.id).delete()
	}

	// Redraw all markers on the map
	private updateMap(locations) {
		// Remove all current marker
		this.markers.map(marker => marker.setMap(null))
		this.markers = []

		for (const loc of locations) {
			const latLng = new google.maps.LatLng(loc.lat, loc.lng)

			const marker = new google.maps.Marker({
				map: this.map,
				animation: google.maps.Animation.DROP,
				position: latLng
			})
			this.markers.push(marker)
		}
	}

	showAlert() {
		const lat = this.position.coords.latitude
		const lng = this.position.coords.longitude

		const marker = new google.maps.Marker({
			map: this.map,
			animation: google.maps.Animation.DROP,
			position: new google.maps.LatLng(
				this.position.coords.latitude,
				this.position.coords.longitude
			)
		})

		Modals.alert({
			title: 'Your Location',
			message: `Lat: ${lat}, Lng: ${lng}`
		})
	}
}
