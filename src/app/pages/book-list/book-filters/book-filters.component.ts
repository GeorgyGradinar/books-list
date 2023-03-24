import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, Subscription} from 'rxjs';
import {LANGUAGES} from 'src/app/constants/languages.const';
import {Filters} from '../../../interfaces/filters.interface';
import {Book} from '../../../interfaces/book.interface';

@Component({
  selector: 'app-book-filters',
  templateUrl: './book-filters.component.html',
  styleUrls: ['./book-filters.component.scss']
})
export class BookFiltersComponent implements OnInit, OnDestroy {
  @Input() books: Book[] = [];

  public filters!: FormGroup;

  public authors: Set<string> = new Set<string>();
  public genres: Set<string> = new Set<string>();
  public readonly languages: string[] = LANGUAGES;

  @Output() public changeFilters: EventEmitter<Filters> = new EventEmitter<Filters>();

  private subscription!: Subscription;

  constructor(private readonly formBuilder: FormBuilder) {
    this.filters = this.formBuilder.group({
      search: [''],
      genre: [''],
      languages: [[]],
      authors: [[]],
      pageStart: [],
      pageEnd: [],
    })
  }

  public ngOnInit(): void {
    this.books.forEach((book: Book) => {
      this.authors.add(book.author);
      this.genres.add(book.genre);
    });

    this.subscription = this.filters.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((filters: Filters) => {
      this.changeFilters.emit(filters);
    })
  }

  public clearFilters(): void {
    this.filters.reset();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
