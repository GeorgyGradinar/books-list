import { Injectable } from '@angular/core';
import { Filters } from '../interfaces/filters.interface';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public getFilteredBooks(filters: Filters, books: Book[]): Book[] {
    return books.filter((book: Book) => {
      return (this.hasSearchText(filters.search, book.name) || this.hasSearchText(filters.search, book.description)) &&
        this.hasGenre(filters.genre, book.genre) &&
        this.isIncludeFilter(filters.languages, book.language) &&
        this.isIncludeFilter(filters.authors, book.author) &&
        this.isMore(filters.pageStart, book.pages) &&
        this.isLess(filters.pageEnd, book.pages);
    });
  }

  public hasGenre(genre: string, bookGenre: string): boolean {
    if (!genre) {
      return true;
    }

    return genre === bookGenre;
  }

  public hasSearchText(filter: string, bookInfo: string): boolean {
    if (!filter) {
      return true;
    }

    const searchString: string = filter.toLowerCase().trim();

    return bookInfo.toLowerCase().includes(searchString);
  }

  public isIncludeFilter(filter: string[], bookInfo: string): boolean {
    if (!filter?.length) {
      return true;
    }

    return filter.includes(bookInfo);
  }

  public isMore(min: number, bookInfo: number): boolean {
    if (!min) {
      return true;
    }

    return bookInfo >= min;
  }

  public isLess(max: number, bookInfo: number): boolean {
    if (!max) {
      return true;
    }

    return bookInfo <= max;
  }
}
