import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestProviderService {

  constructor(public http: HttpClient) {
console.log('Hello RestProvider Provider');
this.getPosts();

   }

   apiUrl ='https://app.fakejson.com/q';
  

   getPosts(){
     this.http.get(this.apiUrl+'/p58dQn1f?token=t2UCrxeb3ed-H6DcGDf57g').subscribe(
       data => {
         console.log(data);
        return JSON.stringify(data);
       
       },
       err =>{
        console.log(err);
       }
       
     );
   }
}
