import { Component, OnInit } from '@angular/core';
import {CommentService} from '../comment.service';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  imgSrc: string;
  //comments: Array<Comment>;

  comments: Observable<any>;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.imgSrc = 'https://angular.io/assets/images/logos/angular/angular.svg';

    // this.commentService.getAllComments().subscribe((res) =>{
    //     this.comments = res;
    //   }
    // );


    this.comments = this.commentService.getAllComments();

    // this.comments = this.commentService.getAllComments().pipe(
    //   map((item) => item.email.toUpperCase())
    // );
  }

  addComment(){
    this.commentService.addComment();
  }

}
