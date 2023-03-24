import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take, tap } from 'rxjs';
import { AuthorsService } from '../../../services/authors.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Author } from 'src/app/interfaces/author.interface';

@Component({
  selector: 'app-add-edit-author-form',
  templateUrl: './add-edit-author-form.component.html',
  styleUrls: ['./add-edit-author-form.component.scss']
})
export class AddEditAuthorFormComponent {
  public authorForm: FormGroup;
  public currentAuthor: Author;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly authorsService: AuthorsService,
              public dialogRef: MatDialogRef<AddEditAuthorFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { author: Author }) {
    this.currentAuthor = data.author || {};

    this.authorForm = this.formBuilder.group({
      name: [this.currentAuthor.name || '', Validators.required],
      lastName: [this.currentAuthor.lastName || '', Validators.required],
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public save(): void {
    if (this.authorForm.invalid) {
      this.authorForm.markAllAsTouched();

      return;
    }

      const updatedAuthor: Author = {
        ...this.currentAuthor,
        ...this.authorForm.value
      }

    const request = updatedAuthor.id ? this.authorsService.updateAuthor(updatedAuthor) : this.authorsService.createAuthor(updatedAuthor);

    request.pipe(
      take(1),
      tap(() => this.close())
    ).subscribe();
  }
}
