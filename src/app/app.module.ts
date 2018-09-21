import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagePuzzlesPage } from './../pages/page-puzzles/page-puzzles';
import { PageStoryPage } from './../pages/page-story/page-story';
import { DetailsPageLevesPage } from './../pages/details-page-leves/details-page-leves';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagePuzzlesPage,
    PageStoryPage,
    DetailsPageLevesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagePuzzlesPage,
    PageStoryPage,
    DetailsPageLevesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
