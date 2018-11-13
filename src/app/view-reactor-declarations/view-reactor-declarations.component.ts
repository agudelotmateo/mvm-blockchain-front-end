import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-view-reactor-declarations',
  templateUrl: './view-reactor-declarations.component.html',
  styleUrls: ['./view-reactor-declarations.component.scss']
})
export class ViewReactorDeclarationsComponent implements OnInit {
  declarations: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log("Buscando reactores")
    this.apiService.getAllReactorDeclarations().subscribe(
      data => this.declarations = data
    ); 
  }
}
