import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooter-compare',
  templateUrl: './shooter-compare.component.html',
  styleUrls: ['./shooter-compare.component.css']
})
export class ShooterCompareComponent implements OnInit{
  shooterParameter: string = 'shooter';

  constructor() {}

  ngOnInit(): void {

  }
}
