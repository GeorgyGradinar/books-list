import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author.interface';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAllAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(`${environment.apiUrl}/authors`);
  }

  public updateAuthor(author: Author): Observable<Author> {
    return this.httpClient.patch<Author>(`${environment.apiUrl}/authors/${author.id}`, author);
  }

  public createAuthor(author: Author): Observable<Author> {
    return this.httpClient.post<Author>(`${environment.apiUrl}/authors`, author);
  }
}
