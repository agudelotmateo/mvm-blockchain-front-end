import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly endpoint = environment.serverEndpoint;

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  public authenticate(user: Object) {
    return this.httpClient.post(`${this.endpoint}/authenticate`, user).subscribe(data => {
      if (data['success']) {
        this.storeUserData(data['user'], data['token']);
        this.router.navigate(['']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  public getAllAgents() {
    return this.wrapGet('agent');
  }

  public createNewAgent(agent: Object) {
    this.createNewUser({ form: agent, type: 'agent', idName: 'idAgenteMEM', route: 'agent' });
  }

  public getAllRegulators() {
    return this.wrapGet('regulator');
  }

  public createNewRegulator(regulator: Object) {
    this.createNewUser({ form: regulator, type: 'regulator', idName: 'idEntidadReguladora', route: 'regulator' });
  }

  public getAllCondenserDeclarations() {
    return this.wrapGet('condenser');
  }

  public createNewCondenserDeclaration(declaration: Object) {
    this.wrapPost('condenser', declaration);
  }

  public storeUserData(user: Object, token: string) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  }

  private wrapGet(route: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('token'));
    return this.httpClient.get(`${this.endpoint}/${route}`, { headers });
  }

  private wrapPost(route: String, object: Object) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('token'));
    this.httpClient.post(`${this.endpoint}/${route}`, object, { headers })
      .subscribe(
        res => this.router.navigate(['']),
        err => console.log(`Couldn't post to ${route}`)
      );
  }

  private createNewUser(settings: Object) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', localStorage.getItem('token'));
    this.httpClient.post(`${this.endpoint}/register`, {
      username: settings['form']['username'],
      password: settings['form']['password'],
      type: settings['type']
    }, { headers }).
      subscribe(
        res => {
          delete settings['form']['username'];
          delete settings['form']['password'];
          settings['form'][settings['idName']] = res['id'];
          this.httpClient.post(`${this.endpoint}/${settings["route"]}`, settings['form'], { headers }).
            subscribe(
              res => this.router.navigate(['']),
              err => console.log(`Couldn't register the new ${settings["type"]} to the blockchain: ${JSON.stringify(err)}`)
            );
        },
        err => console.log(`Couldn't register the ${settings["type"]} to the database: ${JSON.stringify(err)}`)
      );
  }
}
