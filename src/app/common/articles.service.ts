import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
//J'instancie le client HTTP pour faire la requête
  constructor(private service: HttpClient) {
  }
// Je crée une fonction qui renvoie un observable de type tableau de la classe Article
  public getArticles(): Observable<Article[]> {
    // Je crée une variable qui va récupérer les données du fichier json
    const obs: Observable<any> = this.service.get('assets/newsData.json');

// Je vais récupérer seulement ce que je souhaite : ici tout
    const treatment = (param_data: Article[]) => { return param_data as Article[];};

    // Je retourne le résultat en liant les deux méthodes map et traitement
    return obs.pipe(map(treatment));

  }

  public getFilters(): Observable<any> {
        // Je crée une variable qui va récupérer les données du fichier json
    const obs2: Observable<any> = this.service.get("assets/articleSportFilter.json");

    // Je vais récupérer seulement ce que je souhaite : ici tout
    const treatment2 = (param_data: string) => { return param_data as string};

    // Je retourne le résultat en liant les deux méthodes map et traitement
    return obs2.pipe(map(treatment2));
  }

} 