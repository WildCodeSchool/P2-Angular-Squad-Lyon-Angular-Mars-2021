import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quisommesnous',
  templateUrl: './quisommesnous.component.html',
  styleUrls: ['./quisommesnous.component.css']
})
export class QuisommesnousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    onSubmit (form: NgForm){
    console.log(form.value);
  }
}
