import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFiltersComponent } from './book-filters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookFiltersComponent', () => {
  let component: BookFiltersComponent;
  let fixture: ComponentFixture<BookFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ BookFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
