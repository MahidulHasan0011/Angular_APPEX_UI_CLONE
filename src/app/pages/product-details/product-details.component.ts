import { Component, Input, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  thumbsSwiper: any;
  public image: any 
  imageColor:boolean[]= [];

  @Input() data?:any[];

  constructor() { }

  ngOnInit(): void {
  }
  carosoleImage=[
    {
      _id:'1',
      images:"../../../assets/productDetails/aa.png",
    },
    
    {
      _id:'2',
      images:"../../../assets/productDetails/bb.png",
    },
    
    {
      _id:'3',
      images:"../../../assets/productDetails/cc.png",
    },
    {
      _id:'4',
      images:"../../../assets/productDetails/dd.png",
    },

    
  ]


  selectImage(image:any){
    this.image = image
  }
  onChange(i:any){
    this.imageColor= [];
    this.imageColor[i]= !this.imageColor[i];
    // alert('hi hi')
  }
  cardOneData:any[]=[
    {
      _id:"1",
      medias: ["./assets/cartsimage/one.png"],
      images:["./assets/cartsimage/one.png"],
      title:"VENTURINI MEN'S SANDALE",
      routerLink:"/product-details",
      Price:"৳ 2,690",
      discount:"৳ 2,287",
      offer:"(15% OFF)"
    },
    {
      _id:"2",
      medias:["./assets/cartsimage/two.png"],
      images:["../assets/cartsimage/two.png"],
      title:"ONLINE EXCLUSIVE APEX Men's Toe Loop Sandal",
      routerLink:"/product-details",
      Price:"৳ 1,890",
      discount:"৳ 1,418",
      offer:"(15% OFF)"
    },
    {
      _id:"3",
      medias:["./assets/cartsimage/three.png"],
      images:["../assets/cartsimage/three.png"],
      title:"ONLINE EXCLUSIVE APEX Men's Close Sandal",
      routerLink:"/product-details",
      Price:"৳ 2,990",
      discount:'৳ 2,243',
      offer:"(15% OFF)"
    },
    {
      _id:"4",
      medias:["./assets/cartsimage/four.png"],
      images:["./assets/cartsimage/four.png"],
      title:"ONLINE EXCLUSIVE APEX Men's Slip On Sandal",
      routerLink:"/product-details",
      Price:"৳ 1,690",
      discount:"৳ 1,269",
      offer:"(15% OFF)"
    },
    {
      _id:"5",
      medias:["./assets/cartsimage/five.png"],
      images:["./assets/cartsimage/five.png"],
      title:"APEX Men's Close Sandal",
      routerLink:"/product-details",
      Price:"৳ 1,490",
      discount:'৳ 1,264',
      offer:"(15% OFF)"
    },
    {
      _id:"6",
      medias:["./assets/cartsimage/six.png"],
      images:["./assets/cartsimage/six.png"],
      title:"APEX Men's Sandal",
      routerLink:"/product-details",
      Price:'৳ 9,90',
      discount:'৳ 8,20',
      offer:"(15% OFF)"
    },
    {
      _id:"7",
      medias:["./assets/cartsimage/seven.png"],
      images:["./assets/cartsimage/seven.png"],
      title:"APEX Men's Back Belt Sandal",
      routerLink:"/product-details",
      Price:"৳ 1,490",
      discount:'৳ 1,265',
      offer:"(15% OFF)"
    },
    {
      _id:"8",
      medias:["./assets/cartsimage/eight.png"],
      images:["./assets/cartsimage/eight.png"],
      title:"VENTURINI Men's Kolhapuri",
      routerLink:"/product-details",
      Price:"৳ 3,490",
      discount:"৳ 2,893",
      offer:"(15% OFF)"
    }

  ]
  aboveFooterImge:any=[
    {
      images:"../../../assets/avobeFooterImg/c.png",
      name:"Fast, Free Shipping",
      discription:"Order any item and get delivery for free."
    }
    ,
    {
      images:"../../../assets/avobeFooterImg/b.png",
     name:"EXCHANGE FROM ANY STORE",
     discription:"You can exchange from any Apex owned retail stores across Bangladesh within 15 days from the date of purchase."
    }
    ,
    {
      images:"../../../assets/avobeFooterImg/a.png",
      name:"+8809617223344",
      discription:"10:00 am - 7:00 pm (everyday)"
    }
    
  
  ]

}
