import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

/*
  Generated class for the BanditsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BanditsProvider {

  url: string = "http://localhost:3000/api/bandits"

  constructor(public http: Http) {
  }

  getToken(){
    return localStorage.getItem("token");
  }

  setToken(token){
    localStorage.setItem("token", token);
  }

  hasToken(){
    // if(localStorage.getItem("token")){
    //   return true;
    // }else{
    //   return false;
    // }

    // return localStorage.getItem("token") ? true : false;

    return !!localStorage.getItem("token"); 
  }

  insertBandit(real_name, fake_name, email, password){
    // console.log(real_name, fake_name, email, password);
    return this.http.post(this.url, {
      real_name, fake_name, email, password
    }).map((response: Response) => (response.json()));
  }

  singIn(email, password){
    return this.http.post(this.url + "/signin", {
      email,
      password
    }).map((response:Response) => {
      let r = response.json();
      this.setToken(r.token);
      return r;
    });
  }

  getBandits(){
    return this.http.get(this.url + "?token=" + this.getToken())
      .map((response:Response)=>(response.json()));
  }

}
