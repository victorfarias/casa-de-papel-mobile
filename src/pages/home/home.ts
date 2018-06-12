import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BanditsPage } from './../bandits/bandits';
import { BanditsProvider } from './../../providers/bandits/bandits';
import { LogonPage } from './../logon/logon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public bandits: BanditsProvider) {
      
  }

  pushPage(){
    this.navCtrl.push(BanditsPage, {valor: 1});
  }

  toLogon(){
    this.navCtrl.push(LogonPage);
  }

  singIn(email, password){
    this.bandits.singIn(email, password)
      .subscribe(
        data =>{
          console.log(data);
          this.navCtrl.setRoot(BanditsPage);
        },
        error =>{
          console.log(error);
        }
      )
  }

}
