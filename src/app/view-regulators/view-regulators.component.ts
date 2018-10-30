import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-view-regulators',
  templateUrl: './view-regulators.component.html',
  styleUrls: ['./view-regulators.component.scss']
})
export class ViewRegulatorsComponent implements OnInit {
  regulators: Object;

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit() {
    this.blockchainService.getAllRegulators().subscribe(
      data => this.regulators = data
    );
  }

}
