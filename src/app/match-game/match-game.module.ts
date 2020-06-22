import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchGamePageRoutingModule } from './match-game-routing.module';

import { MatchGamePage } from './match-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchGamePageRoutingModule
  ],
  declarations: [MatchGamePage]
})
export class MatchGamePageModule {}
