import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'component-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
