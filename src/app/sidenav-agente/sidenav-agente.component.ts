import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-agente',
  templateUrl: './sidenav-agente.component.html',
  styleUrls: ['./sidenav-agente.component.scss']
})
export class SidenavAgenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }

}
