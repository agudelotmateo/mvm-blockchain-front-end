import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-create-regulator',
  templateUrl: './create-regulator.component.html',
  styleUrls: ['./create-regulator.component.scss']
})
export class CreateRegulatorComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private blockchainService: BlockchainService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      idEntidadReguladora: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    const regulator = {};
    for (var key in this.messageForm.controls) {
      if (this.messageForm.controls.hasOwnProperty(key)) {
        regulator[key] = this.messageForm.controls[key].value;
      }
    }

    this.blockchainService.createNewRegulator(regulator);
    this.success = true;
  }

}
