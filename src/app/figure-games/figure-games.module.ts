import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'

import { CarolPageModule } from '../carol/carol.module'
import { FigureGamesPageRoutingModule } from './figure-games-routing.module'
import { FigureGamesPage } from './figure-games.page'

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		FigureGamesPageRoutingModule,
		CarolPageModule
	],
	declarations: [FigureGamesPage]
})
export class FigureGamesPageModule {}
