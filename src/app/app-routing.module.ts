import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { DeleteBookComponent } from './books/delete-book/delete-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { ViewBooksComponent } from './books/view-books/view-books.component';

const routes: Routes = [
  {path: 'create', component:AddBookComponent},

  {path: 'list', 
    children: [
      {path: '', component:ListBooksComponent},
      {path: 'delete/:id', component:DeleteBookComponent},
      {path: 'edit/:id', component:EditBookComponent},
      {path: 'view/:id', component: ViewBooksComponent},
    ]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
