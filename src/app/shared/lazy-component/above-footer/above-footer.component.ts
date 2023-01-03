import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-footer',
  templateUrl: './above-footer.component.html',
  styleUrls: ['./above-footer.component.scss']
})
export class AboveFooterComponent implements OnInit {
  @Input() data?:any;

  constructor() { }

  ngOnInit(): void {
  }

}
