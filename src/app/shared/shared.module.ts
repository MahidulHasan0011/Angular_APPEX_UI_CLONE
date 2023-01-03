import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CategaryModule } from './lazy-component/categary/categary.module';

import { MainCarosoleModule } from './lazy-component/main-carosole/main-carosole.module';

import { CartOneModule } from './lazy-component/cart-one/cart-one.module';

import { CartTwoModule } from './lazy-component/cart-two/cart-two.module';
import { CartthreeModule } from './lazy-component/cartthree/cartthree.module';
import { OfferCartModule } from './lazy-component/offer-cart/offer-cart.module';
import { AboveFooterModule } from './lazy-component/above-footer/above-footer.module';
import { FooterComponent } from './components/footer/footer.component';
import { AlsoLookCartModule } from './lazy-component/also-look-cart/also-look-cart.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({

  imports: [
    CommonModule,
    FlexLayoutModule,
   
    NgxSpinnerModule,
    MaterialModule,
    RouterModule,
  
    FormsModule,
    CategaryModule,
    MainCarosoleModule,
    CartOneModule,
    CartTwoModule,
    CartthreeModule,
    OfferCartModule,
    AboveFooterModule,
    AlsoLookCartModule
    // FontAwesomeModule
    
  ],
  exports: [
    CategaryModule,
  
   
    NgxSpinnerModule,
    MainCarosoleModule,
    CartOneModule,
    CartTwoModule,
    CartthreeModule,
    OfferCartModule,
    AboveFooterModule,
    FooterComponent
  ],
  declarations: [
    FooterComponent,
   
  ],
 
 
  
})
export class SharedModule { }
