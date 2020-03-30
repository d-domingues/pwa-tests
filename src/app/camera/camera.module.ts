import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { CameraPage } from './camera.page'

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild([{ path: '', component: CameraPage }])
	],
	declarations: [CameraPage]
})
export class CameraPageModule {}
