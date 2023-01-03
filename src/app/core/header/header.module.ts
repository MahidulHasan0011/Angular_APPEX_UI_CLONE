import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialModule } from 'src/app/material/material.module';
// import {SwiperModule} from "swiper/angular";
import { TopHeaderComponent } from './top-header/top-header.component'
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    TopHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SwiperModule,
    
  ],
  exports:[
    HeaderComponent,
    TopHeaderComponent
  ]
})
export class HeaderModule { }
