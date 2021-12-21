import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

    books: any = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.bookService.listBooks().subscribe(data =>{
      console.log(data)
      this.books = data;
    });
  }
}
