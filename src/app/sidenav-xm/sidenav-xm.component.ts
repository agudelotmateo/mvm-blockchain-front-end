import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-xm',
  templateUrl: './sidenav-xm.component.html',
  styleUrls: ['./sidenav-xm.component.scss']
})
export class SidenavXmComponent implements OnInit {
  agent = false;
  regulator = true;
  constructor() { }

  ngOnInit() {
    let ss = JSON.parse(localStorage.getItem('user'));
    if(ss.type == "agent"){
      this.agent = true;
      this.regulator = false;
    } else {
      this.agent = false;
      this.regulator = true;
    }
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }

}
