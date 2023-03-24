import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAuthorFormComponent } from './add-edit-author-form.component';

describe('AddEditAuthorFormComponent', () => {
  let component: AddEditAuthorFormComponent;
  let fixture: ComponentFixture<AddEditAuthorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAuthorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAuthorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
