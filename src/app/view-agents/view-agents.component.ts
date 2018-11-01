import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-agents',
  templateUrl: './view-agents.component.html',
  styleUrls: ['./view-agents.component.scss']
})
export class ViewAgentsComponent implements OnInit {
  agents: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllAgents().subscribe(
      data => this.agents = data
    );
  }

}
