import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { FigureGamesPage } from './figure-games.page'


@NgModule({
	imports: [RouterModule.forChild([{ path: '', component: FigureGamesPage }])],
	exports: [RouterModule]
})
export class FigureGamesPageRoutingModule {}
