import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { CartTwoComponent } from './cart-two.component';



@NgModule({
  declarations: [
    CartTwoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    CartTwoComponent
  ]
})
export class CartTwoModule { }
