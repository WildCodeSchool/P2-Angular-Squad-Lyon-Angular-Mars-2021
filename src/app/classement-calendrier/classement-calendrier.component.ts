import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendrierClassementService } from '../common/calendrier-classement.service';
import { FiltersService } from '../common/filters.service';


// Définition de l'interface pour le classement
export interface ClassementElement {
  P: number
  CLUBS: string;
  PTS: number;
  J: number;
  DIFF: number;
}
@Component({
  selector: 'app-classement-calendrier',
  templateUrl: './classement-calendrier.component.html',
  styleUrls: ['./classement-calendrier.component.css'],
})
export class ClassementCalendrierComponent implements AfterViewInit, OnInit {
  // Nécessaire pour la pagination matchesDuJour
  page: number = 1;
  index: number = 0

  // Macthes à afficher de la partie calendrier
  matchesToDisplay: any[] = []
  // Journée/Round du match selectionné
  matchesJournee: string
  // Définition des colonnes du classement
  displayedColumns: string[] = ['P', 'CLUBS', 'PTS', 'J', 'DIFF'];
  // Tableau pour le classement
  ELEMENT_DATA: ClassementElement[] = []

  //Liste des pays disponibles dans les filtres
  public countryFilter: [] = []
  // Pays que l'utilisateur a selectionné
  public selectedCountry: string = ''
  // Liste des ligues disponibles dans les filtres pour le pays specifié
  public leagueFilter: [] = []
  // Ligue que l'utilisateur a selectionné
  public selectedLeague: string = ''
  // Date que l'utilisateur a selectionné
  public date: Date

  // Necessaire pour Material
  public dataSource;


  constructor(private service: CalendrierClassementService, private filtersService: FiltersService, public datePipe: DatePipe, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Écoute le changement d'url pour adapter les methodes
    this.activatedRoute.url.subscribe(url => {
      this.service.sportCheck()
    })

    // Change les filtres en fonction de l'url actuelle
    this.filtersService.getLeagues().subscribe((leagues) => {
      if (this.router.url.includes('/football')) {
        this.countryFilter = leagues[0];
      }
      else if (this.router.url.includes('/basketball')) {
        this.countryFilter = leagues[1];
      }
    })


    this.getMatches()
  }


  // Nécessaire pour la pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.getStanding()
  }

  // Change le filtre ligue en fonction du pays selectionné
  changeFilters() {
    // Appel de la fonction du service
    this.filtersService.getCountry(this.leagueFilter, this.selectedCountry)
    this.leagueFilter = this.filtersService.leagueFilter
    this.selectedLeague = this.filtersService.selectedLeague
  }

  getStanding() {
    // Reset du tableau à chaque appel
    this.ELEMENT_DATA = []
    // Subscribe à l'observable rendu par la methode du service
    this.service.getStanding().subscribe((api_standing) => {
      // Changement du endpoint en fonction de la discipline
      if (this.router.url.includes('/football')) {
        // Remplissage du tableau pour chaque équipe présente dans la ligue
        api_standing.league.standings[0].forEach(equipe => {
          this.ELEMENT_DATA.push({ P: equipe.rank, CLUBS: equipe.team.name, PTS: equipe.points, J: equipe.all.played, DIFF: equipe.goalsDiff })
        })
        // Changement du endpoint en fonction de la discipline
      } else if (this.router.url.includes('/basketball')) {
        // Remplissage du tableau pour chaque équipe présente dans la ligue
        api_standing.forEach(equipe => {
          this.ELEMENT_DATA.push({ P: equipe.position, CLUBS: equipe.team.name, PTS: equipe.group.points, J: equipe.games.played, DIFF: equipe.points.for - equipe.points.against })
        })
      }

      // Remplissage de la dataSource avec le tableau contenant le classement
      this.dataSource = new MatTableDataSource<ClassementElement>(this.ELEMENT_DATA)
      // Nécessaire pour la pagination
      this.dataSource.paginator = this.paginator;
    })

  }

  // Envoie la ligue selectionné au service et lance la methode getStanding, permettant de faire l'appel à l'API
  getInfos() {
    this.filtersService.getInfos(this.selectedLeague)
    this.getStanding()
    if (this.date !== undefined) {
      this.getMatches()
    }
  }

  // Envoie la date selectionnée au service et lance la methode getMatches, permettant de faire l'appel à l'API
  getDate() {
    this.filtersService.getDate(this.date)
    if (this.selectedLeague !== '') {
      this.getMatches()
    } else { alert('Merci de selectionner une ligue') }
  }

  // Sub à la methode du service rendant l'observable contenant les matches pour la date + ligue de l'utilisateur
  getMatches() {
    this.service.getCalendar().subscribe((api_matchs) => {
      this.matchesToDisplay = api_matchs;
      // On verifie si le tableau de matches n'est pas vide
      if (this.matchesToDisplay.length !== 0) {
        // On modifie ce que l'on recupere en fonction de l'url
        if (this.router.url.includes('/football')) {
          // L'API rend toute une phrase, on ne veut que le nombre de la journée donc on ne selectionne que ça
          this.matchesJournee = this.matchesToDisplay[0].league.round.slice(17, 20)
          // On modifie ce que l'on recupere en fonction de l'url
        } else if (this.router.url.includes('/basketball')) {
          this.matchesJournee = this.matchesToDisplay[0].week
        }
      }
    })
  }
}
