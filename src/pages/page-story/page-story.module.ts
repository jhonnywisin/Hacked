import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageStoryPage } from './page-story';

@NgModule({
  declarations: [
    PageStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PageStoryPage),
  ],
})
export class PageStoryPageModule {}
