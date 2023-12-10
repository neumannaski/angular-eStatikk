import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-br-compare',
  templateUrl: './br-compare.component.html',
  styleUrls: ['./br-compare.component.css']
})
export class BrCompareComponent implements OnInit{
  brParameter: string = 'br';

  constructor() {}

  ngOnInit(): void {

  }

}
