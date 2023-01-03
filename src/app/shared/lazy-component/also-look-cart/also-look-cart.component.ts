import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-also-look-cart',
  templateUrl: './also-look-cart.component.html',
  styleUrls: ['./also-look-cart.component.scss']
})
export class AlsoLookCartComponent implements OnInit {
  @Input() data?:any;
  thumbnailImage: any ;
  link: any;

  constructor() { }

  ngOnInit(): void {
    let images = this.getImages(this.data.medias, this.data.images);
    this.thumbnailImage = images[0];
    if(this.data.hasLink){
      this.link = "" + this.data?.slug;
    }else{
      this.link = "" + this.data?.slug;
    }
  }
  
  getImages(medias: any, images: any){
    let allMedias = [];
    if(medias.length > 0){
      for(let i =0, x=0;i<medias.length;i++){
        if(medias[i] !==null && medias[i] !==""){
          allMedias.push(medias[i]);
          x++;
        }
      }
      allMedias = [...allMedias, ...images];
    }else{
      allMedias = images;
    }
    return allMedias;
  }
}
