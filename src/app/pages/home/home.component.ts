import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

  cardOneData:any[]=[
    {
      _id:"1",
      medias: ["./assets/cartsimage/one.png"],
      images:["./assets/cartsimage/one.png"],
      title:"VENTURINI MEN'S SANDALE",
      routerLink:"/product-details",
      Price:"৳ 2,690",
      discount:"৳ 2,287"
    },
    {
      _id:"2",
      medias:["./assets/cartsimage/two.png"],
      images:["../assets/cartsimage/two.png"],
      title:"ONLINE EXCLUSIVE APEX Men's Toe Loop Sandal",
      routerLink:"/product-details",
      Price:"৳ 1,890",
      discount:"৳ 1,418"
    },
    {
      _id:"3",
      medias:["./assets/cartsimage/three.png"],
      images:["../assets/cartsimage/three.png"],
      title:"ONLINE EXCLUSIVE APEX Men's Close Sandal",
      routerLink:"/product-details",
      Price:"৳ 2,990",
      discount:'৳ 2,243'
    },
    {
      _id:"4",
      medias:["./assets/cartsimage/four.png"],
      images:["./assets/cartsimage/four.png"],
      title:"ONLINE EXCLUSIVE APEX Men's Slip On Sandal",
      routerLink:"/product-details",
      Price:"৳ 1,690",
      discount:"৳ 1,269"
    },
    {
      _id:"5",
      medias:["./assets/cartsimage/five.png"],
      images:["./assets/cartsimage/five.png"],
      title:"APEX Men's Close Sandal",
      routerLink:"/product-details",
      Price:"৳ 1,490",
      discount:'৳ 1,264'
    },
    {
      _id:"6",
      medias:["./assets/cartsimage/six.png"],
      images:["./assets/cartsimage/six.png"],
      title:"APEX Men's Sandal",
      routerLink:"/product-details",
      Price:'৳ 9,90',
      discount:'৳ 8,20'
    },
    {
      _id:"7",
      medias:["./assets/cartsimage/seven.png"],
      images:["./assets/cartsimage/seven.png"],
      title:"APEX Men's Back Belt Sandal",
      routerLink:"/product-details",
      Price:"৳ 1,490",
      discount:'৳ 1,265'
    },
    {
      _id:"8",
      medias:["./assets/cartsimage/eight.png"],
      images:["./assets/cartsimage/eight.png"],
      title:"VENTURINI Men's Kolhapuri",
      routerLink:"/product-details",
      Price:"৳ 3,490",
      discount:"৳ 2,893"
    }

  ]


  categoryImge:any=[
    {
      images:"../../../assets/carts/accessories.png",
    }
    ,
    {
      images:"../../../assets/carts/mens.png",
    }
    ,
    {
      images:"../../../assets/carts/kids.png",
    }
    ,
    {
      images:"../../../assets/carts/womens.png",
    }
  
  ]
  carosoleImage=[
    {
      images:"../../../assets/banar_carousel/first.png",
    },
    {
      images:"../../../assets/banar_carousel/secend.png",
    },
    {
      images:"../../../assets/banar_carousel/thirde.png",
    },
    {
      images:"../../../assets/banar_carousel/fourth.png",
    },
    {
      images:"../../../assets/banar_carousel/fifth.png",
    }



  ]










  cartTwoImge=[
    {
      _id:"1",
      medias: ["./assets/catrTwoImg/one.png"],
      images:["./assets/catrTwoImg/one.png"],
     
    
     
    },
    {
      _id:"2",
      medias: ["./assets/catrTwoImg/2.png"],
      images:["./assets/catrTwoImg/2.png"],
   
    
     
    },
    {
      _id:"3",
      medias: ["./assets/catrTwoImg/3.png"],
      images:["./assets/catrTwoImg/3.png"],
     
    
     
    },
  
    {
      _id:"4",
      medias: ["./assets/catrTwoImg/4.png"],
      images:["./assets/catrTwoImg/4.png"],
  
    
     
    },
    {
      _id:"5",
      medias: ["./assets/catrTwoImg/5.png"],
      images:["./assets/catrTwoImg/5.png"],
   
    
     
    },
    {
      _id:"6",
      medias: ["./assets/catrTwoImg/6.png"],
      images:["./assets/catrTwoImg/6.png"],
     
    
     
    },
    {
      _id:"7",
      medias: ["./assets/catrTwoImg/7.png"],
      images:["./assets/catrTwoImg/7.png"],
    
    
     
    },
  
  ]
  cartThreeImge=[
    {
      _id:"1",
      medias: ["./assets/cartthreeimages/a.png"],
      images:["./assets/cartthreeimages/a.png"],
      title:"VENTURINI Men's Kolhapuri",
      Price:"৳ 3,490",
      discount:"৳ 2,893"
    
     
    },
    {
      _id:"2",
      medias: ["./assets/cartthreeimages/b.png"],
      images:["./assets/cartthreeimages/b.png"],
      title:"VENTURINI Men's Kolhapuri",
      Price:"৳ 3,490",
      discount:"৳ 2,893"
    
     
    },
    {
      _id:"3",
      medias: ["./assets/cartthreeimages/c.png"],
      images:["./assets/cartthreeimages/c.png"],
      title:"VENTURINI Men's Kolhapuri",
      Price:"৳ 3,490",
      discount:"৳ 2,893"
    
     
    },
  
    {
      _id:"4",
      medias: ["./assets/cartthreeimages/d.png"],
      images:["./assets/cartthreeimages/d.png"],
      title:"VENTURINI Men's Kolhapuri",
      Price:"৳ 3,490",
      discount:"৳ 2,893"
    
     
    },
    {
      _id:"5",
      medias: ["./assets/cartthreeimages/e.png"],
      images:["./assets/cartthreeimages/e.png"],
      title:"VENTURINI Men's Kolhapuri",
      Price:"৳ 3,490",
      discount:"৳ 2,893"
    
     
    },
    {
      _id:"6",
      medias: ["./assets/cartthreeimages/f.png"],
      images:["./assets/cartthreeimages/f.png"],
      title:"VENTURINI Men's Kolhapuri",
      Price:"৳ 3,490",
      discount:"৳ 2,893"
    
     
    },
    {
      _id:"7",
      medias: ["./assets/cartthreeimages/g.png"],
      images:["./assets/cartthreeimages/g.png"],
      title:"VENTURINI Men's Kolhapuri",
      Price:"৳ 3,490",
      discount:"৳ 2,893"
    
     
    },
  
  ]
  
  offersImge:any=[
    {
      images:"../../../assets/newsAndOffers/a.png",
      name:"Green factory Award",
    }
    ,
    {
      images:"../../../assets/newsAndOffers/b.png",
     name:"Sprint partnership with Fitness  Plus Gym",
    }
    ,
    {
      images:"../../../assets/newsAndOffers/c.png",
      name:"Breast Cancer Awareness Campaign",
    }
    ,
    {
      images:"../../../assets/newsAndOffers/d.png",
      name:"Apex Wins Best Brand Award",
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
