import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'

import { FigureComponent } from './figure.component'
import { FigureService } from './figure.service'

@NgModule({
	imports: [CommonModule, IonicModule],
	exports: [FigureComponent],
	declarations: [FigureComponent],
	providers: [FigureService]
})
export class CarolPageModule {}
