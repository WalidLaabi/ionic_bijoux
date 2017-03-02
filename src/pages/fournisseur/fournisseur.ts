import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

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
  posts : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http :Http) 
  {
    this.posts = null;
    this.http.get("http://ionicpfa.000webhostapp.com/fournisseur.php")
    .map(res => res.json())
    .subscribe(data=>{
      this.posts = data.Fournisseur;
      console.log(this.posts);
    },error=>
    {console.log(error);} )
    
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad FournisseurPage');
  }

  Back(){
     this.navCtrl.setRoot(HomePage);
  }

}
