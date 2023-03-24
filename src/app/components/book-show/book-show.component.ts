import {Component, Input} from '@angular/core';
import {Book} from "../../interfaces/book.interface";

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.scss']
})
export class BookShowComponent {
  @Input() book!: Book;
}
