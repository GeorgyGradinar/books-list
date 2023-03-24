import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../interfaces/book.interface";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(' http://localhost:3000/books');
  }

  // public getBookById(taskId: number): Observable<Book> {
  //   return this.httpClient.get<Book>(` http://localhost:3000/posts/tasks/${taskId}`);
  // }
  //
  // public updateBook(task: Book): Observable<Book> {
  //   return this.httpClient.patch<Book>(`http://localhost:3000/tasks/${task.id}`, task);
  // }

  public createBook(books: Book): Observable<Book> {
    return this.httpClient.post<Book>(`http://localhost:3000/books`, books);
  }

  // public removeTask(taskId: number): Observable<boolean> {
  //   return this.httpClient.delete<boolean>(`${environment.apiUrl}/tasks/${taskId}`);
  // }
}
