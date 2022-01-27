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
    return this.http.get<Dictator[]>('http://localhost:3000/getDictator');
  }

  deleteDictator(index:any) {
    //calls our service with the index from our button click, says we gotta delete of the 
    return this.http.delete<Dictator[]>(`http://localhost:3000/deleteDictator/${index}`, index);
    console.log(index);
  }
}
