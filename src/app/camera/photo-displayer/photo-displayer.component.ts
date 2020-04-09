import { Component, Input } from '@angular/core'
import { PhotoService } from 'src/app/services/photo.service'

@Component({
	selector: 'app-photo-displayer',
	templateUrl: 'photo-displayer.component.html'
})
export class PhotoDisplayerComponent {
	private _position: number

	// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
	slideOpts = {
		speed: 400,
		initialSlide: 0
	}

	@Input() set position(value: number) {
		this._position = value
		// this.slideOpts.initialSlide = value + 1
	}

	constructor(public photoService: PhotoService) {}
}
