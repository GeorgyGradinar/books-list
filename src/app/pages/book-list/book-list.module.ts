import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./book-list.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFiltersComponent } from './book-filters/book-filters.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {path: '', component: BookListComponent},
];

@NgModule({
  declarations: [BookListComponent, BookFiltersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class BookListModule {
}
