import {Component, OnInit} from '@angular/core';
import {DateproviderService} from '../dateprovider.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [{provide: DateproviderService, useClass: DateproviderService}]
})
export class FooterComponent implements OnInit {

  myName = 'Jakab Hunor';
  displayDate: string;

  constructor(public dateService: DateproviderService) {
  }

  ngOnInit() {
    // this.displayDate = this.dateService.getCurrentDate();

    // this.dateService.getCurrentDateWithPromise().then(
    //   (value) => {
    //     this.displayDate = value;
    //   },
    //   (error) => {
    //     console.log('error receiving date' + error);
    //   }
    // );
    this.dateService.getCurrentDateWithObservable().subscribe({
      next: (value) => { this.displayDate = value; },
      complete: () => { console.log(' no more values to receive! '); }
    });
    // this.dateService.getCurrentDateWithObservable().subscribe(
    //   (value) => {
    //   },
    //   (error) => {
    //   },
    //   () => {
    //   }
    // )
  }

}
