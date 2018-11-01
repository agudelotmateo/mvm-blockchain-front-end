import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-regulators',
  templateUrl: './view-regulators.component.html',
  styleUrls: ['./view-regulators.component.scss']
})
export class ViewRegulatorsComponent implements OnInit {
  regulators: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllRegulators().subscribe(
      data => this.regulators = data
    );
  }

}
