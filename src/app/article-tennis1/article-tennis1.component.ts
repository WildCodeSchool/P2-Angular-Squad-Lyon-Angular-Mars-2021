import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-tennis1',
  templateUrl: './article-tennis1.component.html',
  styleUrls: ['./article-tennis1.component.css']
})
export class ArticleTennis1Component implements OnInit {

  image1:string="assets/img/imgArticleS/Des-filles-dans-la-melee.jpg";
  image2:string="assets/img/imgArticleS/istockphoto-874423892-612x612.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
