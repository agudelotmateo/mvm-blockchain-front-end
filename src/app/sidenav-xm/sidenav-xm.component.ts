import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-xm',
  templateUrl: './sidenav-xm.component.html',
  styleUrls: ['./sidenav-xm.component.scss']
})
export class SidenavXmComponent implements OnInit {

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
