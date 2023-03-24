import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookShowComponent} from "./book-show/book-show.component";
import {HeaderComponent} from "./header/header.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    BookShowComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    BookShowComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }
