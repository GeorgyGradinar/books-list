import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAuthorFormComponent } from './add-edit-author-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorsService } from '../../../services/authors.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('AddEditAuthorFormComponent', () => {
  let component: AddEditAuthorFormComponent;
  let fixture: ComponentFixture<AddEditAuthorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, MatDialogModule],
      declarations: [ AddEditAuthorFormComponent ],
      providers: [AuthorsService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAuthorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
