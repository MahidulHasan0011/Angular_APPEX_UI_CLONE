import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-cart',
  templateUrl: './offer-cart.component.html',
  styleUrls: ['./offer-cart.component.scss']
})
export class OfferCartComponent implements OnInit {
  @Input() data?:any;

  constructor() { }

  ngOnInit(): void {
  }

}
