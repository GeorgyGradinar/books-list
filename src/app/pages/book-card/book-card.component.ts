import {Component} from '@angular/core';
import {Book} from "../../interfaces/book.interface";
import {BooksService} from "../../services/books/books.service";
import {AuthorsService} from "../../services/authors/authors.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  public bookCardForm!: FormGroup;
  public textSubmitButton!: string;
  public book!: Book;
  public authors!: string[];
  public languages: string[] = ['English', 'Russian', 'Spanish', 'France', 'German'];

  constructor(public booksService: BooksService,
              public authorsService: AuthorsService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute
              ) {
    console.log(this.route.snapshot.paramMap.get('id'))

  }

  public ngOnInit(): void {

    this.booksService.getAllBooks().subscribe(allBooks => {
      this.book = allBooks[0];

      this.bookCardForm = this.formBuilder.group({
        name: [this.book.name, Validators.required],
        author: [this.book.author, Validators.required],
        description: [this.book.description, Validators.required],
        pages: [this.book.pages, Validators.required],
        language: [this.book.languages, Validators.required],
        genre: [this.book.genre, Validators.required],
      })

      this.textSubmitButton = this.book.id ? 'Сохранить' : 'Создать';
    });

    this.authorsService.getAllAuthor().subscribe(authors => this.authors = authors);
  }

  public submitBook(): void {

  }
}
