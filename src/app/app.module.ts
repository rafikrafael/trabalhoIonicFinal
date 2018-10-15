import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AdMobFree } from '@ionic-native/admob-free';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AbastecimentoPage } from '../pages/abastecimento/abastecimento';
import { AbastecimentoListaPage } from '../pages/abastecimento-lista/abastecimento-lista';
import { AbastecimentoService } from '../services/abastecimentos/abastecimentos';

const config = {
  apiKey: "AIzaSyD8zv8EIk5YMMzyx2zewC6Fy3LE4EiEt2w",
  authDomain: "trabalhopos02.firebaseapp.com",
  databaseURL: "https://trabalhopos02.firebaseio.com",
  projectId: "trabalhopos02",
  storageBucket: "trabalhopos02.appspot.com",
  messagingSenderId: "1036407150881"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AbastecimentoPage,
    AbastecimentoListaPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AbastecimentoPage,
    AbastecimentoListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AbastecimentoService,
    AdMobFree
  ]
})
export class AppModule {}
