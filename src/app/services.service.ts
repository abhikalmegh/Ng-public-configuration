import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  config: any;
  constructor(private serv: ConfigService, private _http: HttpClient) { }

  getPost() {
    this.config = this.serv['appConfig'];
    return this._http.get(this.config._API);
  }

}
