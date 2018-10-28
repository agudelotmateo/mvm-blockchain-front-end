import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.scss']
})
export class CreateAgentComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private blockchainService: BlockchainService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      idAgenteMEM: ['', Validators.required],
      nombreEmpresa: ['', Validators.required],
      direccionEmpresa: ['', Validators.required],
      telefonoEmpresa: ['', Validators.required],
      faxEmpresa: ['', Validators.required],
      emailEmpresa: ['', Validators.required, Validators.email],
      nombreEmpleado: ['', Validators.required],
      cargoEmpleado: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    const agent = {};
    for (var key in this.messageForm.controls) {
      if (this.messageForm.controls.hasOwnProperty(key)) {
        agent[key] = this.messageForm.controls[key].value;
      }
    }

    this.blockchainService.createNewAgent(agent);
    this.success = true;
  }

}
