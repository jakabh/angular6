import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-firstsub',
  templateUrl: './firstsub.component.html',
  styleUrls: ['./firstsub.component.css']
})
export class FirstsubComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    console.log(this.activeRoute.url);
  }

  ngOnInit() {
  }

}
