import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private userName:string;
  private clientId = "d4588b95e506f275a7e7"
  private clientSecret = "56498062089f3a3d95cb4417d3f0403a807e97a0"

  constructor(private http:Http) {
     this.userName = 'YVONNEANYANGO';
   }
 
  fetchProfileDetails() {
     return this.http.get("https://api.github.com/users/" + this.userName + "?client_id" + this.clientId + "&clientSecret=" + this.clientSecret)
     .map(res => res.json());
   }

   fetchProfileRepository() {
     return this.http.get("https://api.github.com/users/" + this.userName + "/repository?client_id=" + this.clientId + "&clientSecret=" + this.clientSecret)
     .map(res => res.json());
   }
  //  fetchProfileRepository() {
  //   return this.http.get("https://api.github.com/users/" + this.userName + "/repository?client_id=" + this.clientId + "&clientSecret=" + this.clientSecret)
  //   .map(res => res.json());
  //  }
}
