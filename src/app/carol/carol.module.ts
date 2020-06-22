import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'

import { CarolPageRoutingModule } from './carol-routing.module'
import { CarolPage } from './carol.page'
import { FigureComponent } from './figure/figure.component'

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, CarolPageRoutingModule],
	exports: [FigureComponent],
	declarations: [CarolPage, FigureComponent]
})
export class CarolPageModule {}
