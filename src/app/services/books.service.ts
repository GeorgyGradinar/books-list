import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../interfaces/book.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${environment.apiUrl}/books`);
  }

  public updateBook(book: Book): Observable<Book> {
    return this.httpClient.patch<Book>(`${environment.apiUrl}/books/${book.id}`, book);
  }

  public createBook(books: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${environment.apiUrl}/books`, books);
  }
}
