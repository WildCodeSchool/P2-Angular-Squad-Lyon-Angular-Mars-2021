import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Membre } from '../common/membre.model';
import { MembresService } from '../common/membres.service';


@Component({
  selector: 'app-quisommesnous',
  templateUrl: './quisommesnous.component.html',
  styleUrls: ['./quisommesnous.component.css']
})
export class QuisommesnousComponent implements OnInit {
  membersList: Membre[]
  constructor(private membresService: MembresService) { }

  ngOnInit(): void {
    this.membresService.getMembers().subscribe((list: Membre[]) => {
      this.membersList = list
      console.log(this.membersList)
    })
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.resetForm();
  }
}
