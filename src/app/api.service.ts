import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly endpoint = environment.serverEndpoint;
  authToken: string;
  user: Object;

  constructor(
    private httpClient: HttpClient, 
    private router: Router) { }

  public authenticate(user: Object) {
    return this.httpClient.post(`${this.endpoint}/authenticate`, user).subscribe(data => {
      console.log(data);
      if (data['success']) {
        this.storeUserData(data['user'], data['token']);
        this.router.navigate(['']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  public getAllAgents() {
    this.loadToken();
    console.log(this.authToken);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', this.authToken);
    return this.httpClient.get(`${this.endpoint}/agent`, {
      headers: headers
    });
  }

  public createNewAgent(agent: Object) {
    this.httpClient.post(`${this.endpoint}/agent`, agent).
      subscribe(
        res => console.log(res),
        err => console.log(`Couldn't add report: ${JSON.stringify(err)}`)
      );
  }

  public getAllRegulators() {
    return this.httpClient.get(`${this.endpoint}/regulator`);
  }

  public createNewRegulator(regulator: Object) {
    this.httpClient.post(`${this.endpoint}/regulator`, regulator).
      subscribe(
        res => console.log(res),
        err => console.log(`Couldn't add report: ${JSON.stringify(err)}`)
      );
  }

  public storeUserData(user, token) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('username', user.username);
    this.user = user;
    this.authToken = token;
  }

  private loadToken() {
    this.authToken = localStorage.getItem('token');
  }
}
