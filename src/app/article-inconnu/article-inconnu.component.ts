import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-inconnu',
  templateUrl: './article-inconnu.component.html',
  styleUrls: ['./article-inconnu.component.css']
})
export class ArticleInconnuComponent implements OnInit {

  public erreurImg: string = "assets/img/imgLogoIcon/404.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
