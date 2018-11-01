import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-condenser-declaration',
  templateUrl: './create-condenser-declaration.component.html',
  styleUrls: ['./create-condenser-declaration.component.scss']
})
export class CreateCondenserDeclarationComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      idDeclaracionCondensador: ['', Validators.required],
      nombre: ['', Validators.required],
      subestacion: ['', Validators.required],
      nivelTension: ['', Validators.required],
      nombrePuntoConexion: ['', Validators.required],
      capacidadNominal: ['', Validators.required],
      tensionNominal: ['', Validators.required],
      conexion: ['', Validators.required],
      modoConexion: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    const condenser = {
      idDeclaracionCondensador: this.messageForm.controls['idDeclaracionCondensador'].value,
      declaracionCondensador: {
        condensador: {
          nombre: this.messageForm.controls['nombre'].value,
          barra: {
            subestacion: this.messageForm.controls['subestacion'].value,
            nivelTension: this.messageForm.controls['nivelTension'].value,
            nombrePuntoConexion: this.messageForm.controls['nombrePuntoConexion'].value
          }
        },
        capacidadNominal: this.messageForm.controls['capacidadNominal'].value,
        tensionNominal: this.messageForm.controls['tensionNominal'].value,
        conexion: this.messageForm.controls['conexion'].value,
        modoConexion: this.messageForm.controls['modoConexion'].value,
        agente: `resource:co.edu.eafit.mvmblockchain.AgenteMEM#idAgenteMEM:${localStorage.getItem('user')['id']}`
      }
    };

    this.apiService.createNewAgent(condenser);
    this.success = true;
  }

}
