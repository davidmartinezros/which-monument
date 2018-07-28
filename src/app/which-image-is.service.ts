import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class WhichImageIsService {

  private url = 'http://localhost:8080/wii';
  //privaate url = 'https://davidmartinezros.com:8443/which-image-is-1.0.0-SNAPSHOT';
  private urlOneLabel = this.url + '/api/askForImageOneLabel';
  private urlAllLabels = this.url + '/api/askForImageAllLabels';
  
  constructor(private http: Http) { }

  askForImageOneLabel(file) {
    let headers = new Headers(
      {
        'Access-Control-Allow-Origin': '*'
      }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      // ...using post request
      let data = new FormData();
      data.append("file", file);
      return this.http.post(this.urlOneLabel, data, options)
        // ...and calling .json() on the response to return data
        .map((res:Response) => res.text())
        // ... do 3 tries
        .retry(3)
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
  }

  askForImageAllLabels(file) {
    let headers = new Headers(
      {
        'Access-Control-Allow-Origin': '*'
      }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      // ...using post request
      let data = new FormData();
      data.append("file", file);
      return this.http.post(this.urlAllLabels, data, options)
        // ...and calling .json() on the response to return data
        .map((res:Response) => res.json())
        // ... do 3 tries
        .retry(3)
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
  }
}
