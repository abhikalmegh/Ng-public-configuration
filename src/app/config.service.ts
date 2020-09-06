import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable()

export class ConfigService {
  private appConfig : any;
  constructor(private _http : HttpClient) { }
  
  loadConfig(){
    //return this._http.get('https://jsonplaceholder.typicode.com/users')
    //return this._http.get('http://192.168.2.5:3001/config')
    return this._http.get('./../config/app.config.json')
    .toPromise()
    .then(res =>{
      this.appConfig = res;
      console.log('Res', res);
    })
  }

  getConfig(){
    return this.appConfig;
  }
}
