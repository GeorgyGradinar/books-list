import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/books/books.service";
import {Book} from "../../interfaces/book.interface";
import {ROUTES} from "../../constants/router.const";
import {Filters} from '../../interfaces/filters.interface';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books!: Book[];
  public filteredBooks!: Book[];
  public readonly routes: typeof ROUTES = ROUTES;

  constructor(private readonly booksService: BooksService,
              private readonly filterService: FilterService) {
  }

  public ngOnInit(): void {
    this.booksService.getAllBooks().subscribe(allBooks => {
      this.books = allBooks;
      this.filteredBooks = allBooks;
    });
  }

  public changeFilteredBooks(filters: Filters): void {
    this.filteredBooks = this.filterService.getFilteredBooks(filters, this.books);
  }
}
