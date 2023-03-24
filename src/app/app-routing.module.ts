import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ROUTES} from './constants/router.const'

const routes: Routes = [
  {path: '', redirectTo: ROUTES.BOOK_LIST, pathMatch: 'full'},
  {
    path: ROUTES.BOOK_LIST,
    loadChildren: () => import('./pages/book-list/book-list.module').then(m => m.BookListModule)
  },
  {
    path: ROUTES.BOOK_CARD,
    loadChildren: () => import('./pages/book-card/book-card.module').then(m => m.BookCardModule),
  },
  {
    path: ROUTES.AUTHORS,
    loadChildren: () => import('./pages/authors/authors.module').then(m => m.AuthorsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
