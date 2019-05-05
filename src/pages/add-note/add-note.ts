import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteService}  from '../../providers/Note-Service/note-service';
//import { Note } from '../../models/note.model';
import { Note } from '../../models/note.model';
import { FormGroup,FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  formGroup:FormGroup;
  note: Note;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController,public navParams: NavParams,private noteService: NoteService)
     {this.formGroup = new FormGroup
      ({
       title: new FormControl(),
         content: new FormControl(),
         date: new FormControl(),
       })

  }

saveNote(note: Note) {
  this.noteService.saveNote(note);
  this.navCtrl.pop();

}

}
