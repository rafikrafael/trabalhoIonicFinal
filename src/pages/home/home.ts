import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AbastecimentoPage } from '../abastecimento/abastecimento';
import { AbastecimentoListaPage } from '../abastecimento-lista/abastecimento-lista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  incluirAbastecimento() {
    this.navCtrl.push(AbastecimentoPage);
  }

  listarAbastecimentos() {
    this.navCtrl.push(AbastecimentoListaPage);
  }
}
