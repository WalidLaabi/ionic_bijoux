import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the Fournisseur page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fournisseur',
  templateUrl: 'fournisseur.html'
})
export class FournisseurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FournisseurPage');
  }

  Back(){
     this.navCtrl.setRoot(HomePage);
  }

}
