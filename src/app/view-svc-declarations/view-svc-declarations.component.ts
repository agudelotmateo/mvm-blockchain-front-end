import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-svc-declarations',
  templateUrl: './view-svc-declarations.component.html',
  styleUrls: ['./view-svc-declarations.component.scss']
})
export class ViewSvcDeclarationsComponent implements OnInit {
  declarations: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllSvcDeclarations().subscribe(
      data => this.declarations = data
    ); 
  }

}
