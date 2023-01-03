import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartthreeComponent } from './cartthree.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartthreeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    CartthreeComponent
  ]
})
export class CartthreeModule { }
