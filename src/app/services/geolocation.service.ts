import { Injectable } from '@angular/core'
import { Plugins } from '@capacitor/core'
import { bindCallback, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

const { Modals, Geolocation } = Plugins

@Injectable({
	providedIn: 'root'
})
export class GeolocationService {
	public watchPosition(): Observable<any> {
		// formats calback fn data as an Observable
		const watch = bindCallback(Geolocation.watchPosition)({})

		return watch.pipe(map(([pos]) => pos.coords))
	}
}
