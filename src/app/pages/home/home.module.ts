import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// import { CategaryComponent } from 'src/app/shared/lazy-component/categary/categary.component';
import { CategaryModule } from 'src/app/shared/lazy-component/categary/categary.module';
import { MainCarosoleModule } from 'src/app/shared/lazy-component/main-carosole/main-carosole.module';
import { CartOneModule } from 'src/app/shared/lazy-component/cart-one/cart-one.module';
import { SwiperModule } from 'swiper/angular';
import { CartTwoModule } from 'src/app/shared/lazy-component/cart-two/cart-two.module';
import { CartthreeModule } from 'src/app/shared/lazy-component/cartthree/cartthree.module';
import { OfferCartModule } from 'src/app/shared/lazy-component/offer-cart/offer-cart.module';
import { AboveFooterModule } from 'src/app/shared/lazy-component/above-footer/above-footer.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from 'src/app/core/header/header.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainCarosoleModule,
    CategaryModule,
    CartOneModule,
    CartTwoModule,
    SwiperModule,
    CartthreeModule,
    OfferCartModule,
    AboveFooterModule,
    HeaderModule,
   
    
  ]
})
export class HomeModule { }
