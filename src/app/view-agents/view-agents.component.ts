import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../blockchain.service';

@Component({
  selector: 'app-view-agents',
  templateUrl: './view-agents.component.html',
  styleUrls: ['./view-agents.component.scss']
})
export class ViewAgentsComponent implements OnInit {
  agents: Object;

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit() {
    this.blockchainService.getAllAgents().subscribe(
      data => this.agents = data
    );
  }

}
