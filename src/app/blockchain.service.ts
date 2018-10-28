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
    console.log(agent);
    this.httpClient.post(`${this.endpoint}/agent`, agent).
      subscribe(
        res => console.log(res),
        err => console.log(`Couldn't add report: ${JSON.stringify(err)}`)
      );
  }
}
