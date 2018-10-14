import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Abastecimento } from '../../model/abastecimento';
import { AbastecimentoService } from '../../services/abastecimentos/abastecimentos';

/**
 * Generated class for the AbastecimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abastecimento',
  templateUrl: 'abastecimento.html',
})
export class AbastecimentoPage {
  abastecimento: Abastecimento = new Abastecimento();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private abastecimentoService: AbastecimentoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbastecimentoPage');
  }

  salvarAbastecimento() {
    this.abastecimentoService.add(this.abastecimento);
    this.cancelarVoltar();
  }

  cancelarVoltar() {
    this.navCtrl.pop();
  }

}
