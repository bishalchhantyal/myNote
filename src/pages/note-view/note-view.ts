import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Note } from 'ionic-angular';
import { NoteService } from '../../providers/Note-Service/note-service';



@IonicPage()
@Component({
  selector: 'page-note-view',
  templateUrl: 'note-view.html',
})
export class NoteViewPage {
  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private noteService: NoteService
    ) {
      this.note = this.navParams.get('note');
  }

  deleteNote(createDate: number){
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }

}
