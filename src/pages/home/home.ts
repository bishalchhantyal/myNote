import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { runInThisContext } from 'vm';
import { AddNotePage } from '../add-note/add-note';
import { NoteService } from '../../providers/Note-Service/note-service';
import { Note } from '../../models/note.model';
import { cr } from '@angular/core/src/render3';

import { NoteViewPage } from '../note-view/note-view';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private notes: Promise<Note[]>; 
 private note: Note;

  constructor(public navCtrl: NavController, private noteService: NoteService) {

  }
  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }


  addNote(){
    this.navCtrl.push(AddNotePage);

  }
  getNote(createDate: number){
    this.noteService.getNote(createDate).then((n) =>{
      this.note = n;
      this.navCtrl.push(NoteViewPage, { note: this.note })
    })

  }
getAllNotes(){
  return this.noteService.getAllNotes();
}
}
