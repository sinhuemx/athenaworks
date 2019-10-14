import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
getQuery( query:any ){
  const baseUrl = `https://randomuser.me/api/${ query }`;
  return this.http.get( baseUrl );
}
getQueryId( query:any ){
  const baseUrlId = `https://randomuser.me/api/${ query }`;
  return this.http.get( baseUrlId );
}

constructor( private http:HttpClient ) { }

//With a Observable  
getJson(url: string){
  return this.getQuery('?results=20');
  // pipe(map(datos => datos['results'].name))
}
getJsonId(url: string){
  return this.getQueryId('?id=name');
  // pipe(map(datos => datos['results'].name))
}

//With a Promise
// getJson(url: string){
//   return this.http.get(this.baseUrl).toPromise();
// }

}
