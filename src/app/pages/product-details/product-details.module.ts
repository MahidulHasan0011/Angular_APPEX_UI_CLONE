import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { SwiperModule } from 'swiper/angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ProductDetailsComponent } from './product-details.component';
import { FormsModule } from '@angular/forms';
import { AlsoLookCartModule } from 'src/app/shared/lazy-component/also-look-cart/also-look-cart.module';
import { AboveFooterModule } from 'src/app/shared/lazy-component/above-footer/above-footer.module';


@NgModule({
  declarations: [
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    CommonModule,
    ProductDetailsRoutingModule,
    MatDialogModule,
    MaterialModule,
    SwiperModule,
    FormsModule,
    NgxSpinnerModule,
    AlsoLookCartModule,
    AboveFooterModule
  ]
})
export class ProductDetailsModule { }
