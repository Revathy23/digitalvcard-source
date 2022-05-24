import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  storeDetails(firstName:any, lastName:any, userName: any,password:any): Observable<any>{
    return this.http.post<any>("https://digitalvcard.pythonanywhere.com/storeData", {firstName:firstName,lastName:lastName,userName:userName,password:password})
  }

  checkDetails(userName: any,password:any): Observable<any>{
    return this.http.post<any>("https://digitalvcard.pythonanywhere.com/checkData", {userName:userName,password:password})
  }

  storeLinks(username:any,linkedin:any, twitter: any,git:any,facebook:any,instagram:any): Observable<any>{
    return this.http.post<any>("https://digitalvcard.pythonanywhere.com/storeLinks", {username:username,linkedin:linkedin,twitter:twitter,git:git,facebook:facebook,instagram:instagram})
  }

  getLinks(username:any){
    return(this.http.post<any>("https://digitalvcard.pythonanywhere.com/getLinks", {email:username}))
  }
}
