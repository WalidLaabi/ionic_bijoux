import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FournisseurPage } from '../fournisseur/fournisseur';
import {  ProduitPage} from '../produit/produit';
import { TableauPage } from '../tableau/tableau';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Openfournisseur()
  {
     
     this.navCtrl.setRoot(FournisseurPage);

   }

  Openproduit()
  {
     this.navCtrl.setRoot(ProduitPage);
  }

  Opentableau()
  {
     this.navCtrl.setRoot(TableauPage);
  }

}
