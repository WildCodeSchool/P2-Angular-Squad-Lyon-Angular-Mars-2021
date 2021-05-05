import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public articleID :number;

  image1:string="assets/img/imgArticleS/Des-filles-dans-la-melee.jpg";
  image2:string="assets/img/imgArticleS/istockphoto-874423892-612x612.jpg";


  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleID = parseInt(params.get('articleID'));
    });
  }

}
