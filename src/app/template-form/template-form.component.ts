import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  onSubmit(formulario: NgForm) {
    console.log(formulario);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
