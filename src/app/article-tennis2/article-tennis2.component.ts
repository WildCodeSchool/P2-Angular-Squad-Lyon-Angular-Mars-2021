import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-tennis2',
  templateUrl: './article-tennis2.component.html',
  styleUrls: ['./article-tennis2.component.css']
})
export class ArticleTennis2Component implements OnInit {

  image1:string="assets/img/imgArticleS/Des-filles-dans-la-melee.jpg";
  image2:string="assets/img/imgArticleS/istockphoto-874423892-612x612.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
