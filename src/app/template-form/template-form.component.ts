import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formulario: NgForm) {
    this.httpClient.post('https://httpbin.org/post', formulario.value).pipe(tap(console.log), take(1)).subscribe();
  }
  requiredTouched = (campo): boolean => campo.invalid && campo.touched;

  classError = (campo): string => this.requiredTouched(campo) ? 'is-invalid' : '';

  consultaCEP(cep: string, f: NgForm) {
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      if (/^[0-9]{8}$/.test(cep)) {
        this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(
          tap(address => this.viacepToUser(f, address)),
          take(1),
        ).subscribe();
      }
    }
  }
  viacepToUser(f: NgForm, address) {
    f.form.patchValue({
      endereco: {
        cep: address.cep,
        rua: address.logradouro,
        complemento: address.complemento,
        bairro: address.bairro,
        cidade: address.localidade,
        estado: address.uf
      }
    });
  }
}
