import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlsoLookCartComponent } from './also-look-cart.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AlsoLookCartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    AlsoLookCartComponent
  ]
})
export class AlsoLookCartModule { }
