import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'

import { PhotoPage } from '../photo/photo.page'

@Component({
	selector: 'app-modal-ctrl',
	templateUrl: 'modal-ctrl.component.html',
	styleUrls: ['modal-ctrl.component.scss']
})
export class ModalCtrlComponent {
	constructor(public modalController: ModalController) {}

	async presentModal() {
		const modal = await this.modalController.create({
			component: PhotoPage
		})
		return await modal.present()
	}
}
