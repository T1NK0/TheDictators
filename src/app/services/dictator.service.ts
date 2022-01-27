import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dictator } from '../interfaces/dictators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictatorService {

  constructor(private http: HttpClient) { }

  createDictator(dictatorData:Dictator):Observable<Dictator> {
    return this.http.post<Dictator>('http://localhost:3000/createDictator', dictatorData);
  }

  //Gets the dictators from our api array.
  //Sets observable, with the interface of director.
  getDictators(): Observable<Dictator[]>{
    //looks at the http service get, with the interface of dictator, looking at our api with the endpoint of /getDictator.
    return this.http.get<Dictator[]>('http://localhost:3000/getDictator');
  }

  deleteDictator(index:any) {
    console.log(index);
    //Gotta send the index as a json, else it can't read it.
    return this.http.delete<Dictator[]>('http://localhost:3000/deleteDictator', index);
  }
}
