import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-svc-declaration',
  templateUrl: './create-svc-declaration.component.html',
  styleUrls: ['./create-svc-declaration.component.scss']
})
export class CreateSvcDeclarationComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      idDeclaracionSvc: ['', Validators.required],
      nombre: ['', Validators.required],
      subestacion: ['', Validators.required],
      nivelTension: ['', Validators.required],
      nombrePuntoConexion: ['', Validators.required],
      tenNom: ['', Validators.required],
      MaxInd: ['', Validators.required],
      MaxCap: ['', Validators.required],
      unifilar: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    console.log("Submited SVC");
    const reactor = {
      idDeclaracionSvc: this.messageForm.controls['idDeclaracionSvc'].value,
      declaracion: {
        scv: {
          nombre: this.messageForm.controls['nombre'].value,
          barra: {
            subestacion: this.messageForm.controls['subestacion'].value,
            nivelTension: parseInt(this.messageForm.controls['nivelTension'].value),
            nombrePuntoConexion: this.messageForm.controls['nombrePuntoConexion'].value
          }
        },
        tensionNominal: parseInt(this.messageForm.controls['tenNom'].value),
        maximaPotenciaInductiva: parseInt(this.messageForm.controls['MaxInd'].value),
        maximaPotenciaCapacitiva: parseInt(this.messageForm.controls['MaxCap'].value),
        unifilar: this.messageForm.controls['unifilar'].value,
        agente: `resource:co.edu.eafit.mvmblockchain.AgenteMEM#idAgenteMEM:${JSON.parse(localStorage.getItem('user'))['id']}`
      }
    };

    this.apiService.createNewReactorDeclaration(reactor);
    this.success = true;
  }

}
