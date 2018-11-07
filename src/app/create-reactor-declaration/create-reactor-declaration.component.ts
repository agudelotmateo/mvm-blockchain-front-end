import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-reactor-declaration',
  templateUrl: './create-reactor-declaration.component.html',
  styleUrls: ['./create-reactor-declaration.component.scss']
})
export class CreateReactorDeclarationComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      idDeclaracionReactor: ['', Validators.required],
      nombre: ['', Validators.required],
      subestacion: ['', Validators.required],
      nivelTension: ['', Validators.required],
      nombrePuntoConexion: ['', Validators.required],
      capNom: ['', Validators.required],
      tenNom: ['', Validators.required],
      conexion: ['', Validators.required],
      modCon: ['', Validators.required]
    });
  }

  thisSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    const reactor = {
      idDeclaracionReactor: this.messageForm.controls['idDeclaracionReactor'].value,
      declaracionReactor: {
        reactor: {
          nombre: this.messageForm.controls['nombre'].value,
          barra: {
            subestacion: this.messageForm.controls['subestacion'].value,
            nivelTension: parseInt(this.messageForm.controls['nivelTension'].value),
            nombrePuntoConexion: this.messageForm.controls['nombrePuntoConexion'].value
          }
        },
        capacidadNominal: parseInt(this.messageForm.controls['capNom'].value),
        tensionNominal: parseInt(this.messageForm.controls['tenNom'].value),
        conexion: this.messageForm.controls['conexion'].value,
        modoConexion: this.messageForm.controls['modCon'].value,
        agente: `resource:co.edu.eafit.mvmblockchain.AgenteMEM#idAgenteMEM:${JSON.parse(localStorage.getItem('user'))['id']}`
      }
    };

    this.apiService.createNewReactorDeclaration(reactor);
    this.success = true;
  }

}
