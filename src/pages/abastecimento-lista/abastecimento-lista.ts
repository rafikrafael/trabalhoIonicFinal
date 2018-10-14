import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { AbastecimentoService } from '../../services/abastecimentos/abastecimentos';
import { Abastecimento } from '../../model/abastecimento';

/**
 * Generated class for the AbastecimentoListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abastecimento-lista',
  templateUrl: 'abastecimento-lista.html',
})
export class AbastecimentoListaPage {
  abastecimentos: Observable<Abastecimento[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private abastecimentoService: AbastecimentoService) {
    this.abastecimentos = abastecimentoService.getAll().valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbastecimentoListaPage');
  }

  excluirAbastecimento(key) {
    this.abastecimentoService.remove(key);
  }

}
