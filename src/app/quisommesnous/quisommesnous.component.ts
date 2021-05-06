import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Membre } from '../common/membre.model';
import { MembresService } from '../common/membres.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-quisommesnous',
  templateUrl: './quisommesnous.component.html',
  styleUrls: ['./quisommesnous.component.css'],
})
export class QuisommesnousComponent implements OnInit {
  // Je crée une variable de type tableau de Membre
  membersList: Membre[]
  // J'instancie la variable qui va me permettre de customizer l'alerte
  swal: any;

  // J'instancie le service
  constructor(private membresService: MembresService) { }

  ngOnInit(): void {
    // appel de la fonction du service
    this.membresService.getMembers().subscribe((list: Membre[]) => {
      this.membersList = list
    })
  }


  onSubmit(form: NgForm) {
    // J'envoie une alerte
    Swal.fire('Merci !', 'Votre message a bien été transmis!', 'success')

    // Je reset le formulaire
    form.resetForm();
  }
}
