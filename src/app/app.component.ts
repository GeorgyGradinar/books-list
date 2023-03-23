import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./interfaces/book.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private readonly httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get<Book>(' http://localhost:3000/posts').subscribe(el => console.log(el))
  }
}
