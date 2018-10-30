import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private userName:string;
  private clientId = "d4588b95e506f275a7e7"
  private clientSecret = "56498062089f3a3d95cb4417d3f0403a807e97a0"

  constructor(private http:Http) {

   }
}
