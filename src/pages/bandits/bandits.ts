import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BanditsProvider } from './../../providers/bandits/bandits';


/**
 * Generated class for the BanditsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bandits',
  templateUrl: 'bandits.html',
})
export class BanditsPage {

  bandits: any[];

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public banditsService: BanditsProvider) {
        this.banditsService.getBandits()
          .subscribe(
            data=>{
              this.bandits = data;
              console.log(this.bandits);
            },
            error=>{
              console.log(error);
            }
          )
  }

  ionViewDidLoad() {
    
  }

  


}
