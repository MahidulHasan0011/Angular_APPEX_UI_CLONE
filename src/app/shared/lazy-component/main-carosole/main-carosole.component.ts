import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination,Autoplay]);

@Component({
  selector: 'app-main-carosole',
  templateUrl: './main-carosole.component.html',
  styleUrls: ['./main-carosole.component.scss']
})
export class MainCarosoleComponent implements OnInit {
  @Input() data?:any[];
  

  constructor() { }

  ngOnInit(): void {
  }


  

}
