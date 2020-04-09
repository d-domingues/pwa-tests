import { Component } from '@angular/core'
import { ActionSheetController, MenuController, ModalController } from '@ionic/angular'

import { PhotoService } from '../services/photo.service'
import { PhotoDisplayerComponent } from './photo-displayer/photo-displayer.component'

@Component({
	selector: 'app-camera',
	templateUrl: 'camera.page.html',
	styleUrls: ['camera.page.scss']
})
export class CameraPage {
	storedPhotos

	slideOpts = {
		speed: 400,
		initialSlide: 0
	}

	storedPhotos$ = this.photoService.storedPhotos$

	constructor(
		public photoService: PhotoService,
		public actionSheetController: ActionSheetController,
		public modalController: ModalController,
		private menu: MenuController
	) {	}

	ionViewWillEnter() {
		this.photoService.storedPhotos$.subscribe(
			storedPhotos => (this.storedPhotos = storedPhotos)
		)
	}

	openMenu() {
		this.menu.open('side-menu')
	}

	async showActionSheet(photo, position) {
		const actionSheet = await this.actionSheetController.create({
			header: 'Photos',
			buttons: [
				{
					text: 'Delete',
					role: 'destructive',
					icon: 'trash',
					handler: () => {
						this.photoService.deletePicture(photo, position)
					}
				},
				{
					text: 'Cancel',
					icon: 'close',
					role: 'cancel',
					handler: () => {
						// Nothing to do, action sheet is automatically closed
					}
				}
			]
		})
		await actionSheet.present()
	}

	async presentModal(position: number) {
		const modal = await this.modalController.create({
			component: PhotoDisplayerComponent,
			componentProps: { position }
		})
		return await modal.present()
	}
}
