import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AbastecimentoPage } from '../abastecimento/abastecimento';
import { AbastecimentoListaPage } from '../abastecimento-lista/abastecimento-lista';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private admobFree: AdMobFree) {
      this.displayBanner();
  }

  displayBanner() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // we will just use a test id for this tutorial
      id: 'ca-app-pub-6068193623417129/8796469887',
      isTesting: false,
      autoShow: true,
    };

  this.admobFree.banner.config(bannerConfig);

  this.admobFree.banner.prepare().then((result)=>{
    console.log(result);
  },(reason)=>{
    console.log(reason);
  });

 }

  incluirAbastecimento() {
    this.navCtrl.push(AbastecimentoPage);
  }

  listarAbastecimentos() {
    this.navCtrl.push(AbastecimentoListaPage);
  }
}
