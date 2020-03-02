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

  user = {
    nome: '',
    email: '',
    cep: '',
    numero: '',
    complemento: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
  };

  onSubmit(formulario: NgForm) {
    console.log(this.user);
  }

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  requiredTouched = (campo): boolean => campo.invalid && campo.touched;

  classError = (campo): string => this.requiredTouched(campo) ? 'is-invalid' : '';

  consultaCEP(cep: string) {
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      if (/^[0-9]{8}$/.test(cep)) {
        this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(
          tap((address: {
            cep: '',
            logradouro: '',
            complemento: '',
            bairro: '',
            localidade: '',
            uf: '',
            unidade: '',
            ibge: '',
            gia: ''
          }) => {
            this.user.cep = address.cep;
            this.user.rua = address.logradouro;
            this.user.complemento = address.complemento;
            this.user.bairro = address.bairro;
            this.user.cidade = address.localidade;
            this.user.estado = address.uf;
          }),
          take(1),
        ).subscribe();
      }
    }
  }
}
