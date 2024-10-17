import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PacienteModelo } from './model/paciente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_crud';

  pacienteFormulario: FormGroup = new FormGroup({});
  pacienteObj: PacienteModelo = new PacienteModelo();

constructor(){
  this.criarFormulario()
}

  criarFormulario(){
    this.pacienteFormulario = new FormGroup({
      idPaciente: new FormControl(this.pacienteObj.idPaciente),
      nome: new FormControl(this.pacienteObj.nome),
      email: new FormControl(this.pacienteObj.email),
      celular:  new FormControl(this.pacienteObj.celular),
      cidade:  new FormControl(this.pacienteObj.cidade),
      estado:  new FormControl(this.pacienteObj.estado),
      codPin: new FormControl(this.pacienteObj.codPin),
      cpf: new FormControl(this.pacienteObj.cpf),
      endereco: new FormControl(this.pacienteObj.endereco)
    })
  }

}
