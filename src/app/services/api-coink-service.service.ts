import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as environment from '../../environments/environment'
import { EncryptService } from './encrypt-service.service';
import { map, tap, switchMap, switchMapTo, catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiCoinkServiceService {
  protected environment = environment.environment
  constructor(private http: HttpClient,private encrypService: EncryptService) { }
  getDocumentTypes(){
    return this.http.get(this.environment.API_URL+'signup/documentTypes?apiKey=030106')
  }
  getGenders(){
    return this.http.get(this.environment.API_URL+'signup/genders?apiKey=030106')
  }
  sendSmsVerficationNumber(numberPhone){
    return this.http.post(this.environment.API_URL+'signup/sendSmsVerificationNumber?apiKey=030106',{payload:this.encrypService.encrypt('{"phone_number":"'+numberPhone+'","log_signup_id":""}',this.environment.KEY)}).pipe(map((data:any) => {return this.encrypService.decrypt(data.payload,this.environment.KEY) }));
  }
}
