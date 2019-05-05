import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteViewPage } from './note-view';

@NgModule({
  declarations: [
    NoteViewPage,
  ],
  imports: [
    IonicPageModule.forChild(NoteViewPage),
  ],
})
export class NoteViewPageModule {}
