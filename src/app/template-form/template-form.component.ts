import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  user = {
    nome: '',
    email: ''
  };

  onSubmit(formulario: NgForm) {
    console.log(this.user);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
