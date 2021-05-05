import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-quisommesnous',
  templateUrl: './quisommesnous.component.html',
  styleUrls: ['./quisommesnous.component.css'],
})
export class QuisommesnousComponent implements OnInit {
  
   swal: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    Swal.fire('Merci !', 'Votre message a bien été transmis!', 'success')
    form.resetForm();
  }
}
