import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BanditsPage } from './bandits';

@NgModule({
  declarations: [
    BanditsPage,
  ],
  imports: [
    IonicPageModule.forChild(BanditsPage),
  ],
})
export class BanditsPageModule {}
