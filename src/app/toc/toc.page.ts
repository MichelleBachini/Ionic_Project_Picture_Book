import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      id: 1,
      title: 'Chapter 1 | Max',
      url: '/chapter1',
    },
    {
      id: 2,
      title: 'Chapter 2 | Leila',
      url: '/chapter2',
    },
    {
      id: 3,
      title: 'Chapter 3 | Grayson',
      url: '/chapter3',
    },
    {
      id: 4,
      title: 'Chapter 4 | Alita',
      url: '/chapter4',
    },
    {
      id: 5,
      title: 'Chapter 5 | Naala',
      url: '/chapter5',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
