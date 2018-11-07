import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-xm',
  templateUrl: './sidenav-xm.component.html',
  styleUrls: ['./sidenav-xm.component.scss']
})
export class SidenavXmComponent implements OnInit {
  agent = false;

  constructor() { }

  ngOnInit() {
    let ss = JSON.parse(localStorage.getItem('user'));
    if(ss.type == "agent"){
      this.agent = true;
    } else {
      this.agent = false;
    }
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }

}
