import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/books/books.service";
import {Book} from "../../interfaces/book.interface";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books!: Book[] ;

  constructor(public booksService: BooksService) {
  }

  public ngOnInit(): void {
    this.booksService.getAllBooks().subscribe(allBooks => this.books = allBooks);

  }
}
