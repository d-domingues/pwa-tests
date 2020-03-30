import { Component } from '@angular/core'
import { ActionSheetController } from '@ionic/angular'

import { PhotoService } from '../services/photo.service'

@Component({
	selector: 'app-camera',
	templateUrl: 'camera.page.html',
	styleUrls: ['camera.page.scss']
})
export class CameraPage {
	storedPhotos

	storedPhotos$ = this.photoService.storedPhotos$

	constructor(
		public photoService: PhotoService,
		public actionSheetController: ActionSheetController
	) {}

	ngOnInit() {
		this.photoService.storedPhotos$.subscribe(storedPhotos => {
			console.log(storedPhotos)
			this.storedPhotos = storedPhotos
		})

		// this.photoService.loadSaved()
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
}
