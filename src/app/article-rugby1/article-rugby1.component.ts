import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-rugby1',
  templateUrl: './article-rugby1.component.html',
  styleUrls: ['./article-rugby1.component.css']
})
export class ArticleRugby1Component implements OnInit {

  image1:string="assets/img/imgArticleS/Des-filles-dans-la-melee.jpg";
  image2:string="assets/img/imgArticleS/istockphoto-874423892-612x612.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
