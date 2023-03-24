import {Component} from '@angular/core';
import {Book} from "../../interfaces/book.interface";
import {BooksService} from "../../services/books/books.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorsService} from "../../services/authors.service";
import {Author} from "../../interfaces/author.interface";
import {LANGUAGES} from "../../constants/languages.const";
import {ROUTES} from "../../constants/router.const";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  public currentId!: number;
  public bookCardForm!: FormGroup;
  public textSubmitButton!: string;
  public book?: Book;
  public authors!: Author[];
  public languages: string[] = LANGUAGES;

  constructor(public booksService: BooksService,
              public authorsService: AuthorsService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.booksService.getAllBooks().subscribe(allBooks => {
      this.currentId = Number(this.route.snapshot.paramMap.get('id'))!
      this.book = allBooks.find(item => item.id === this.currentId);

      this.bookCardForm = this.formBuilder.group({
        name: [this.book?.name || '', Validators.required],
        author: [this.book?.author || '', Validators.required],
        description: [this.book?.description || '', Validators.required],
        pages: [this.book?.pages || '', Validators.required],
        language: [this.book?.language || '', Validators.required],
        genre: [this.book?.genre || '', Validators.required],
      })

      this.textSubmitButton = this.book?.id ? 'Сохранить' : 'Создать';
    });

    this.authorsService.getAllAuthors().subscribe(authors => this.authors = authors);
  }

  public submitBook(): void {
    if (this.bookCardForm.invalid) {
      return
    }

    if (this.currentId) {
      this.booksService.createBook(this.bookCardForm.value).subscribe();
    } else {
      this.booksService.createBook(this.bookCardForm.value).subscribe()
    }

    this.router.navigate([ROUTES.BOOK_LIST]);
  }
}
