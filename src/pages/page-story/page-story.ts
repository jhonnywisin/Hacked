import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPageLevesPage } from './../details-page-leves/details-page-leves';


@IonicPage()
@Component({
  selector: 'page-page-story',
  templateUrl: 'page-story.html',
})
export class PageStoryPage {

  niveles = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.niveles = [
      {
        titulo:     "The Hackpad",
        icon:       "",
        color:      "",
        descripcion: "este es el primer nivel"
      },
      {
        titulo:     "Chapter 2",
        icon:       "",
        color:      "",
        descripcion: "este es el segundo nivel"
      },
      {
        titulo:     "Chapter 3",
        icon:       "",
        color:      "",
        descripcion: "este es el tercer nivel"
      },
      {
        titulo:     "Chapter 4",
        icon:       "",
        color:      "",
        descripcion: "este es el cuarto nivel"
      },
      {
        titulo:     "Chapter 5",
        icon:       "",
        color:      "",
        descripcion: "este es el quinto nivel"
      },
      {
        titulo:     "Chapter 6",
        icon:       "",
        color:      "",
        descripcion: "este es el sexto nivel"
      },
      {
        titulo:     "Chapter 7",
        icon:       "",
        color:      "",
        descripcion: "este es el septimo nivel"
      },
      {
        titulo:     "Chapter 8",
        icon:       "",
        color:      "",
        descripcion: "este es el octavo nivel"
      },
      {
        titulo:     "Chapter 9",
        icon:       "",
        color:      "",
        descripcion: "este es el noveno nivel"
      },
      {
        titulo:     "Chapter 10",
        icon:       "",
        color:      "",
        descripcion: "este es el decimo nivel"
      }
    ]
  }

  openDetailsPage(item){
    this.navCtrl.push(DetailsPageLevesPage,{item: item});
  }
}
