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
  membersList: Membre[]
  swal: any;
  constructor(private membresService: MembresService) { }

  ngOnInit(): void {
    this.membresService.getMembers().subscribe((list: Membre[]) => {
      this.membersList = list
    })
  }


  onSubmit(form: NgForm) {
    Swal.fire('Merci !', 'Votre message a bien été transmis!', 'success')
    form.resetForm();
  }
}
