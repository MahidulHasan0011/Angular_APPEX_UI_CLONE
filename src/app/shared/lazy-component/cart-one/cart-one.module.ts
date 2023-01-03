import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartOneComponent } from './cart-one.component';
import { MaterialModule } from 'src/app/material/material.module';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartOneComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    CartOneComponent
  ]
})
export class CartOneModule { }
