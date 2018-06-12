import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BanditsProvider } from './../../providers/bandits/bandits';

/**
 * Generated class for the LogonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logon',
  templateUrl: 'logon.html',
})
export class LogonPage {

  fake_name: String;
  real_name: String;
  email: String;
  password: String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public banditProvider: BanditsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogonPage');
  }

  logon(){
    this.banditProvider.insertBandit(this.real_name,
                                this.fake_name,
                                this.email,
                                this.password)
        .subscribe(
          data => {
            console.log(data)
            this.navCtrl.pop();
          },
          error => console.log(error)
        );                            
    // this.navCtrl.pop();
  }

}
