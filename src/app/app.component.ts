import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-ng';

  constructor(private router: Router){};

  moveMenu(){
    //console.log('a');

    this.router.navigate(['2']);
  }
}


