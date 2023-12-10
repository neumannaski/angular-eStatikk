import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moba-compare',
  templateUrl: './moba-compare.component.html',
  styleUrls: ['./moba-compare.component.css']
})
export class MobaCompareComponent implements OnInit {
  mobaParameter: string = 'moba';

  constructor() {}

  ngOnInit(): void {

  }

}
