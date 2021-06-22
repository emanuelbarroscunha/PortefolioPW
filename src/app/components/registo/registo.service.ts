import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistoService {

  link = "http://moreiramoises.pt/server/apis/signup.php";


  constructor(private http: HttpClient) { }

  registar(nome:string, pass:string){
    let dataToSend : FormData = new FormData();
    dataToSend.append("username", nome);
    dataToSend.append("password", pass);

    return this.http.post(this.link,dataToSend);
  }
}
