import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategaryComponent } from './categary.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    CategaryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    CategaryComponent
  ]
})
export class CategaryModule { }
