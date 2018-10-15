import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


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
    private admobFree: AdMobFree,
    private platform: Platform) {
    this.mostarPublicidade();
  }

  mostarPublicidade() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: false,
      id: ( this.platform.is('android') ? 'ca-app-pub-6068193623417129/8796469887' : ''),
      autoShow: true
      };

      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
        console.log(['testea']);

          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log('testeb', e));
  };

  incluirAbastecimento() {
    this.navCtrl.push(AbastecimentoPage);
  }

  listarAbastecimentos() {
    this.navCtrl.push(AbastecimentoListaPage);
  }
}
