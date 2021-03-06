import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,LoadingController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  data : any;
  fetchdata : any;
  constructor(public http : Http,public navCtrl:NavController,public navp:NavParams
  , public alert:AlertController , public loading:LoadingController) 
  {
    this.data = {};
    this.data.username = "";
    this.data.password ="";
  }
  LogIn()
  {
    let username = this.data.username;
    let password = this.data.password;
    let data = JSON.stringify({username,password});
    let link = "http://ionicpfa.000webhostapp.com/login.php";
    this.http.post(link,data)
    .map(res => res.json())
      .subscribe(data=>{
        let loader = this.loading.create(
          {
            content : "Authentification....",
            duration :2000

          }
        );
        loader.present().then(() => 
          {
            this.fetchdata = data;
            this.navCtrl.push(HomePage,this.fetchdata);
          }
        );
      },error=>{
        let alert = this.alert.create(
          {
            title : "Attention",
            subTitle : "Login ou password indifinie ou incorret ! Veulliez Réesseyer encore",
            buttons :['Ok']
          }
        );
        alert.present();
        //console.log("error login passe data");
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
