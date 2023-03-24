import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author.interface';
import { AuthorsService } from '../../services/authors.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditAuthorFormComponent } from './add-edit-author-form/add-edit-author-form.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  public readonly displayedColumns: string[] = ['name', 'lastName', 'actions'];
  public authors: Author[] = [];

  constructor(private readonly authorsService: AuthorsService,
              private readonly dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.getAuthors();
  }

  public addEditAuthor(author?: Author): void {
    const dialogRef = this.dialog.open(AddEditAuthorFormComponent, {
      data: {author: author},
    });

    dialogRef.afterClosed().pipe(
      take(1)
    ).subscribe(result => {
      this.getAuthors();
    });
  }

  public getAuthors(): void {
    this.authorsService.getAllAuthors().pipe(
      take(1)
    ).subscribe((authors: Author[]) => this.authors = authors);
  }
}
