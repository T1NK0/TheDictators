import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dictator } from '../interfaces/dictators';

@Injectable({
  providedIn: 'root'
})
export class CreationService {

  constructor(private http: HttpClient) { }

  APIurl: string = "http://localhost:3000/dictators"

  createDictator(dictatorData:Dictator) {
    return this.http.post<Dictator>(this.APIurl, dictatorData);
  }
}
