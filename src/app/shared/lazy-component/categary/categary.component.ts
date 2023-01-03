import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categary',
  templateUrl: './categary.component.html',
  styleUrls: ['./categary.component.scss']
})
export class CategaryComponent implements OnInit {
  @Input() data?:any;
 
  constructor() { }

  ngOnInit(): void {
      
  }
}
