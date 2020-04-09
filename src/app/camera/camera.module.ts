import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { CameraPage } from './camera.page'
import { PhotoDisplayerComponent } from './photo-displayer/photo-displayer.component'

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild([{ path: '', component: CameraPage }])
	],
	declarations: [CameraPage, PhotoDisplayerComponent],
	entryComponents: [PhotoDisplayerComponent]
})
export class CameraPageModule {}
