import { Component, ElementRef, ViewChild } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Geolocation, GeolocationPosition, Plugins } from '@capacitor/core'
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

	constructor(
		private fbAuth: AngularFireAuth,
		private afs: AngularFirestore,
		private menu: MenuController
	) {
		this.anonymousLogin()
	}

	openMenu() {
		this.menu.open('side-menu')
	}

	ionViewWillEnter() {
		this.watchPosition().subscribe(
			(position: GeolocationPosition) => (this.position = position)
		)

		this.loadMap()
	}

	// formats calbackFn data as an Observable
	watchPosition(): Observable<any> {
		return bindCallback(Geolocation.watchPosition)({})
	}

	showAlert() {
		const lat = this.position.coords.latitude
		const lng = this.position.coords.longitude

		Plugins.Modals.alert({
			title: 'Your Location',
			message: `Lat: ${lat}, Lng: ${lng}`
		})
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
			this.locations.subscribe(locations => {
				this.updateMap(locations)
			})
		})
	}

	// Initialize a blank map
	private loadMap() {
		const latLng = new google.maps.LatLng(40, 0)

		const mapOptions = {
			center: latLng,
			zoom: 5,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
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
			}
		})
	}

	// Unsubscribe from the geolocation watch using the initial ID
	stopTracking() {
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
	updateMap(locations) {
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
}
