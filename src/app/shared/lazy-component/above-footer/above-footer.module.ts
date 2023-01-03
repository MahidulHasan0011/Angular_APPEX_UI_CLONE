import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboveFooterComponent } from '../above-footer/above-footer.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboveFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    AboveFooterComponent
  ]
})
export class AboveFooterModule { }
