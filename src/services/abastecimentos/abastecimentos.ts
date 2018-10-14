import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Abastecimento } from '../../model/abastecimento';

@Injectable()
export class AbastecimentoService {
  itemsCollection: AngularFirestoreCollection<Abastecimento> = this.afs.collection<Abastecimento>('abastecimento');

  constructor(private afs: AngularFirestore) {
  }

  getAll() {
    return this.itemsCollection;
  }

  add(abastecimento: Abastecimento) {
    if (!abastecimento.key) {
      const id = this.afs.createId();
      abastecimento.key = id;
      return  this.itemsCollection.doc(id).set(JSON.parse(JSON.stringify(abastecimento)));
    } else {
      return this.itemsCollection.doc(abastecimento.key).update(abastecimento);
    }

  }

  remove(key: string) {
  return this.itemsCollection.doc(key).delete();
  }

  get(key: string): AngularFirestoreDocument<Abastecimento> {
    return this.afs.doc<Abastecimento>(key);
  }

}
