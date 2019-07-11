import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userId;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.userId = userId;
    console.log(this.userId);

  }

}
