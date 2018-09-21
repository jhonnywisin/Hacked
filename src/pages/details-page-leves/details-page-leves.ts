import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-page-leves',
  templateUrl: 'details-page-leves.html',
})
export class DetailsPageLevesPage {

  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.item = navParams.data.item;
  }

}
