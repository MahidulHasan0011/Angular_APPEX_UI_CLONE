import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { MainCarosoleComponent } from './main-carosole.component';
import {SwiperModule} from "swiper/angular"



@NgModule({
  declarations: [
    MainCarosoleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SwiperModule,
  ],
  exports:[
    MainCarosoleComponent
  ]
})
export class MainCarosoleModule { }
