import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the Produit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html'
})
export class ProduitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitPage');
  }
Back(){
     this.navCtrl.setRoot(HomePage);
  }
}
