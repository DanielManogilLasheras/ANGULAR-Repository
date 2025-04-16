import { Injectable } from '@angular/core';
import { RecetaAPI } from '../model/receta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getAllRecipes () : Observable<any>{
    let url= "https://dummyjson.com/recipes";
    return this.http.get(url);
  }
}
