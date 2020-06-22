import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarolPage } from './carol.page';

const routes: Routes = [
  {
    path: '',
    component: CarolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarolPageRoutingModule {}
