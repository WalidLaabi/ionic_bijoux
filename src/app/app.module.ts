import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FournisseurPage } from '../pages/fournisseur/fournisseur';
import {  ProduitPage} from '../pages/produit/produit';
import { TableauPage } from '../pages/tableau/tableau';
import {LoginPage} from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    FournisseurPage,
    ProduitPage,
    HomePage,
    TableauPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FournisseurPage,
    ProduitPage,
    HomePage,
    TableauPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
