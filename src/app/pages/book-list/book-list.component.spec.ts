import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterService } from '../../services/filter.service';
import { Filters } from '../../interfaces/filters.interface';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let filterServiceSpy: jasmine.SpyObj<FilterService>;

  beforeEach(async () => {
    const spyService = jasmine.createSpyObj('FilterService', ['getFilteredBooks']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BookListComponent],
      providers: [
        {provide: FilterService, useValue: spyService},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    filterServiceSpy = TestBed.inject(FilterService) as jasmine.SpyObj<FilterService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeFilteredBooks() should', () => {
    it('call filtersService with updated filters', () => {
      filterServiceSpy.getFilteredBooks.and.returnValue([]);
      const filters: Filters = {
        search: '',
        genre: '',
        languages: [],
        authors: [],
        pageStart: 0,
        pageEnd: 0
      }
      component.books = [];

      component.changeFilteredBooks(filters);

      expect(filterServiceSpy.getFilteredBooks).toHaveBeenCalledOnceWith(filters, []);
    });
  });
});
