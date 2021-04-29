import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CalendrierClassementService } from '../common/calendrier-classement.service';

// Définition de l'interface
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
  styleUrls: ['./classement-calendrier.component.css']
})
export class ClassementCalendrierComponent implements AfterViewInit {
  // Définition des colums du classement
  displayedColumns: string[] = ['P', 'CLUBS', 'PTS', 'J', 'DIFF'];
  ELEMENT_DATA: ClassementElement[] = []
  


public dataSource: any;
  constructor(private service: CalendrierClassementService) { }
// Nécessaire pour la pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(){
    this.service.getStanding().subscribe((api_standing) => {
      api_standing.forEach(equipe => {
        this.ELEMENT_DATA.push({P: equipe.rank, CLUBS: equipe.team.name, PTS: equipe.points, J: equipe.all.played, DIFF: equipe.goalsDiff })
      });
      this.dataSource = new MatTableDataSource<ClassementElement>(this.ELEMENT_DATA)
      this.dataSource.paginator = this.paginator;
    })
  }
  

  

  
  

}
