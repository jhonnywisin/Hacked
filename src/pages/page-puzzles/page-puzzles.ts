import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageStoryPage } from './../page-story/page-story';

@IonicPage()
@Component({
  selector: 'page-page-puzzles',
  templateUrl: 'page-puzzles.html',
})
export class PagePuzzlesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pageStory(){
    this.navCtrl.push(PageStoryPage);
  }
}
