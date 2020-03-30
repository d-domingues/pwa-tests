import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IonicModule } from '@ionic/angular'

import { CompassPage } from './compass.page'

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		RouterModule.forChild([{ path: '', component: CompassPage }])
	],
	declarations: [CompassPage]
})
export class CompassPageModule {}
