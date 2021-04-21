import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-foot1',
  templateUrl: './article-foot1.component.html',
  styleUrls: ['./article-foot1.component.css']
})
export class ArticleFoot1Component implements OnInit {

  image1:string="assets/img/imgArticleS/Des-filles-dans-la-melee.jpg";
  image2:string="assets/img/imgArticleS/istockphoto-874423892-612x612.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
