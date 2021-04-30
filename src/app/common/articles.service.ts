import { Injectable } from '@angular/core';
import { TestArticles } from './test-articles';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private service: HttpClient;

  constructor(service: HttpClient, router: Router) {
    this.service = service;
  }

  public getArticles(): Observable<TestArticles[]> {
    const obs: Observable<any> = this.service.get('assets/newsData.json');

    const treatment = (param_data: TestArticles[]) => { return param_data as TestArticles[];};
    return obs.pipe(map(treatment));

  }

} 