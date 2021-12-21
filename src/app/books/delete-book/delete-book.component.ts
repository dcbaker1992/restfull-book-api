import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  
  bookId: string = '';

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.bookId = data['id']; 
    });

    if(this.bookId){
      this.bookService.deleteBook(this.bookId).subscribe(data => {
        console.log("Book Deleted");
      }, err => {
        console.log(err)
      }) 
    }
  }

}
