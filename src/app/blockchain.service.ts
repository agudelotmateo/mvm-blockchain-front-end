import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  readonly endpoint = environment.serverEndpoint;

  constructor(private httpClient: HttpClient) { }

  getAllAgents() {
    return this.httpClient.get(`${this.endpoint}/agent`);
  }

  createNewAgent(agent: Object) {
    this.httpClient.post(`${this.endpoint}/agent`, agent).
      subscribe(
        res => console.log(res),
        err => console.log(`Couldn't add report: ${JSON.stringify(err)}`)
      );
  }

  getAllRegulators() {
    return this.httpClient.get(`${this.endpoint}/regulator`);
  }

  createNewRegulator(regulator: Object) {
    this.httpClient.post(`${this.endpoint}/regulator`, regulator).
      subscribe(
        res => console.log(res),
        err => console.log(`Couldn't add report: ${JSON.stringify(err)}`)
      );
  }
}
