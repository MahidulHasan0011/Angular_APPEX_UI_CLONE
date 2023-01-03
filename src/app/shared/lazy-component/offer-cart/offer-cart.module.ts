import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferCartComponent } from './offer-cart.component';
import { MaterialModule } from 'src/app/material/material.module';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OfferCartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
   
    RouterModule
    
  ],
  exports:[
    OfferCartComponent
  ]
})
export class OfferCartModule { }
