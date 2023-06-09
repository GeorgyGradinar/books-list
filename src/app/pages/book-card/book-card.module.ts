import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookCardComponent} from "./book-card.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {SharedComponentsModule} from "../../components/shared-components.module";

const routes: Routes = [
  {path: ':id', component: BookCardComponent},
];

@NgModule({
  declarations: [BookCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    SharedComponentsModule
  ]
})
export class BookCardModule { }
