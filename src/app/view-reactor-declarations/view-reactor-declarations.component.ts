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
    let ss = JSON.parse(localStorage.getItem('user'));
    if (ss.type == "regulator"){
      console.log("busca como XM")
      this.apiService.getAllReactorDeclarations().subscribe(
        data => this.declarations = data
      );
    } else if (ss.type == "agent"){
      console.log("Busca como agente")
      this.apiService.getIDReactor().subscribe(
        data => this.declarations = data
      );
    }
  }

}
