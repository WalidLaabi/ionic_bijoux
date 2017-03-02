import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the Tableau page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tableau',
  templateUrl: 'tableau.html'
})
export class TableauPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableauPage');
  }
Back(){
     this.navCtrl.setRoot(HomePage);
  }
}
