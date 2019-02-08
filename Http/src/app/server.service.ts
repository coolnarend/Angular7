import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// import 'rxjs/Rx';

import { Observable } from 'rxjs-compat';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http-7cb05.firebaseio.com/data.json',
    //             servers,
    //             {headers: headers});
    return this.http.put('https://udemy-ng-http-7cb05.firebaseio.com/data.json',
                servers,
                {headers: headers});
  }

  getServers() {
    // return this.http.get('https://udemy-ng-http-7cb05.firebaseio.com/data.json')
    return this.http.get('https://udemy-ng-http-7cb05.firebaseio.com/data.json')
    .map(
      (response: Response) => {
        const data = response.json();
        for (const server of data) {
          // server.name = 'FETCHED_' + server.name;
          server.name = server.name;
        }
        return data;
      }
    )
    .catch(
      (error: Response) => {
        console.log(error);
        return Observable.throw('Something went wrong');
      }
    );
  }

  getAppName() {
    return this.http.get('https://udemy-ng-http-7cb05.firebaseio.com/appName.json')
    .map(
      (response: Response) => {
        return response.json();
      }
    );
  }

}
