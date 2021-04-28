import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any[] = [
    {
      thumb: 'assets/images/rsz_01.jpg',
      image: 'assets/images/01.jpg',
      default: 'assets/images/rsz_01-default.jpg',
    },
    {
      thumb: 'assets/images/rsz_02.jpg',
      image: 'assets/images/02.jpg',
      default: 'assets/images/rsz_02-default.jpg',
    },
    {
      thumb: 'assets/images/rsz_03.jpg',
      image: 'assets/images/03.jpg',
      default: 'assets/images/rsz_03-default.jpg',
    },
    /* {
      image: 'assets/images/04.jpg',
      default: 'assets/images/04.jpg',
    },
    {
      image: 'assets/images/05.jpg',
      default: 'assets/images/05.jpg',
    },
    {
      image: 'assets/images/06.jpg',
      default: 'assets/images/06.jpg',
    },
    {
      image: 'assets/images/07.jpg',
      default: 'assets/images/07.jpg',
    },
    {
      image: 'assets/images/08.jpg',
      default: 'assets/images/08.jpg',
    },
    {
      image: 'assets/images/09.jpg',
      default: 'assets/images/09.jpg',
    },
    {
      image: 'assets/images/10.jpg',
      default: 'assets/images/10.jpg',
    } */
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
