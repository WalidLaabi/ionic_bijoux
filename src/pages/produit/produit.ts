import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
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
  posts : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http :Http) 
  {
    this.posts = null;
    this.http.get("http://ionicpfa.000webhostapp.com/produit.php")
    .map(res => res.json())
    .subscribe(data=>{
      this.posts = data.Produit;
      console.log(this.posts);
    },error=>
    {console.log(error);} );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitPage');
  }
Back(){
     this.navCtrl.setRoot(HomePage);
  }
}
