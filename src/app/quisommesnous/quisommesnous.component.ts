import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-quisommesnous',
  templateUrl: './quisommesnous.component.html',
  styleUrls: ['./quisommesnous.component.css'],
})
export class QuisommesnousComponent implements OnInit {
  // J'instancie la variable qui va me permettre de customizer l'alerte
   swal: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // J'envoie une alerte
    Swal.fire('Merci !', 'Votre message a bien été transmis!', 'success')

    // Je reset le formulaire
    form.resetForm();
  }
}
