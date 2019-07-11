import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private db: AngularFirestore) { }

  getAllComments(): Observable<any[]>{
    return this.db.collection('comments').valueChanges();
  }

  addComment(){

    this.db.collection('comments').add(
      {id: 4, name: 'anna', email: 'a@a.com',body: 'test'}
    );
  }
}
