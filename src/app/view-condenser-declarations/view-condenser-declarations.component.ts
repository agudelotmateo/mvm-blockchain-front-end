import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-condenser-declarations',
  templateUrl: './view-condenser-declarations.component.html',
  styleUrls: ['./view-condenser-declarations.component.scss']
})
export class ViewCondenserDeclarationsComponent implements OnInit {
  declarations: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllCondenserDeclarations().subscribe(
      data => this.declarations = data
    );
  }

}
