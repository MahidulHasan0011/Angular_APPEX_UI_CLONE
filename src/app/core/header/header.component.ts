import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data?:any;
 
  

  
  
  headerFixed = false;
  categoryMenu = false;
  resCateMenu = false;
  resHomeMenu = true;
  slideMenu = false;
  subCategoryMenu = false;
  categoryBar = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
   
  
  }
  resCategoryMenuActive() {
    this.resCateMenu = true;
    this.resHomeMenu = false;
  }
  resHomeMenuActive() {
    this.resCateMenu = false;
    this.resHomeMenu = true;
  }
  /***
   * Slide menu
   */
  slideMenuActive() {
    this.slideMenu = true;
  }
  slideMenuInactive() {
    this.slideMenu = false;}

    categoryMenuShow() {
      if (this.router.url == '/') {
        if (window.scrollY > 500 || window.innerWidth < 1050) {
          this.categoryMenu = !this.categoryMenu;
        } else {
          this.categoryMenu = false;
        }
      } else {
        this.categoryMenu = !this.categoryMenu;
      }
    }
    categoryMenuHide(){
      this.categoryMenu = false;
    }


    header=[
      {
        _id:"1",
        title:"FREE SHIPPING ON ALL ORDERS",
       
      
       
      },
      {
        _id:"2",
        title:"FLAT 25% DISCOUNT: ALL MENS CLOTHING & ONLINE EXCLUSIVE ITEMS",
     
      
       
      },
      {
        _id:"3",
        title:" FLAT 25% DISCOUNT: ALL APEX GIFT VOUCHER",
       
      
       
      },
    
      {
        _id:"4",
        title:"UPTO 60% MEGA DISCOUNT ON 1500+ ITEMS",
    
      
       
      },
      {
        _id:"5",
        title:" BUY 5 ITEMS, GET ADDITIONAL 5% DISCOUNT",
     
      
       
      },
      {
        _id:"6",
        title:"FREE SHIPPING ON ALL ORDERS",
       
      
       
      },
      {
        _id:"7",
        title:"FLAT 25% DISCOUNT: ALL MENS CLOTHING & ONLINE EXCLUSIVE ITEMS",
      
      
       
      },
  
      {
        _id:"8",
        title:"FLAT 25% DISCOUNT: ALL APEX GIFT VOUCHER",
      
      
       
      },
      {
        _id:"9",
        title:"UPTO 60% MEGA DISCOUNT ON 1500+ ITEMS",
      
      
       
      },
      {
        _id:"10",
        title:"BUY 5 ITEMS, GET ADDITIONAL 5% DISCOUNT",
      
      
       
      },
      {
        _id:"11",
        title:"FREE SHIPPING ON ALL ORDERS",
      
      
       
      },
  
    
    ]

    
}

