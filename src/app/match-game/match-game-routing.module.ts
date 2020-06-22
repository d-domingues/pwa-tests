import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchGamePage } from './match-game.page';

const routes: Routes = [
  {
    path: '',
    component: MatchGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchGamePageRoutingModule {}
