import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HostagesPage } from './hostages';

@NgModule({
  declarations: [
    HostagesPage,
  ],
  imports: [
    IonicPageModule.forChild(HostagesPage),
  ],
})
export class HostagesPageModule {}
