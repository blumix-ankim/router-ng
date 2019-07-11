import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  today = new Date();
  money: number;

  constructor() { }

  ngOnInit() {
    this.money = 3256145000;
  }



}
