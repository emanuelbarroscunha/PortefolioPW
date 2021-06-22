import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DungeonService {

  constructor(private http :HttpClient) { }

    linkLogin="";

    doLogin(nome,pass){
      let dataToSend : FormData = new FormData();
      
      dataToSend.append("username",nome);
      dataToSend.append("password",pass);

      return this.http.post(this.linkLogin,dataToSend);
    }
}
