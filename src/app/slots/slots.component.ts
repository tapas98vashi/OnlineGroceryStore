/**
 * @author Tapas Vashi
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   *
   * @param value To display particular time-slot selected
   * Function templateForm will display particular time-slot which you have selected
   */
  templateForm(value: any): void {
    alert('You have selected ' +JSON.stringify(value)+ ' slot.');
  }
}
