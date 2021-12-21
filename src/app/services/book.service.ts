import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  listBooks(){
    return this.http.get("http://localhost:8082/api/books");
  }

  viewBook(id: String){
    return this.http.get("http://localhost:8082/api/books/"+ id);
  }
  createBook(Object: any){
    return this.http.post("http://localhost:8082/api/books", Object);
  }
}
