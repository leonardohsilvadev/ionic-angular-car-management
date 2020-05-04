import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _url: string = 'http://192.168.15.15:8080/';

  constructor() { }

  get url() {
    return this._url;
  }
}
