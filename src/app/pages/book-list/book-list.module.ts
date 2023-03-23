import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookListComponent} from "./book-list.component";

const routes: Routes = [
  {path: '', component: BookListComponent},
];

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookListModule { }
