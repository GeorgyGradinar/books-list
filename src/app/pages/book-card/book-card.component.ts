import {Component, OnInit} from '@angular/core';
import {Book} from "../../interfaces/book.interface";
import {BooksService} from "../../services/books.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorsService} from "../../services/authors.service";
import {Author} from "../../interfaces/author.interface";
import {LANGUAGES} from "../../constants/languages.const";
import {ROUTES} from "../../constants/router.const";
import {take} from "rxjs";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit{

  public currentId!: number;
  public bookCardForm!: FormGroup;
  public textSubmitButton!: string;
  public book?: Book;
  public authors!: Author[];
  public languages: string[] = LANGUAGES;
  public isReadMode!: boolean;
  public readonly routes: typeof ROUTES = ROUTES;

  constructor(public booksService: BooksService,
              public authorsService: AuthorsService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.booksService.getAllBooks().pipe(take(1)).subscribe(allBooks => {
      this.currentId = Number(this.route.snapshot.paramMap.get('id'))!;
      this.book = allBooks.find(item => item.id === this.currentId);

      this.isReadMode = !!this.book;

      this.bookCardForm = this.formBuilder.group({
        name: [this.book?.name || '', Validators.required],
        author: [this.book?.author || '', Validators.required],
        description: [this.book?.description || '', Validators.required],
        pages: [this.book?.pages || '', Validators.required],
        language: [this.book?.language || '', Validators.required],
        genre: [this.book?.genre || '', Validators.required],
      });

      this.textSubmitButton = this.book?.id ? 'Сохранить' : 'Создать';

    });

    this.authorsService.getAllAuthors().pipe(take(1)).subscribe(authors => this.authors = authors);
  }

  public submitBook(): void {

    if (this.bookCardForm.invalid) {
      return;
    }

    const updatedAuthor: Book = {
      ...this.book,
      ...this.bookCardForm.value
    }

    const request = this.currentId ? this.booksService.updateBook(updatedAuthor) : this.booksService.createBook(updatedAuthor);

    request.pipe(
      take(1)
    ).subscribe();

    this.router.navigate([ROUTES.BOOK_LIST]);
  }
}
