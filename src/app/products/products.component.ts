/**
 * @author Tapas Vashi
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    window.alert('You have selected Combo Pack.');
  }

}
