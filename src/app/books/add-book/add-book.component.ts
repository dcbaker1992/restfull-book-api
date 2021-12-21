import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  
  addBookForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder,private bookService: BookService) { }

  ngOnInit(): void {
    this.addBookForm = this.formBuilder.group({
      'title': new FormControl(''),
      'subtitle': new FormControl(''),
      'author': new FormControl(''),
      'published': new FormControl(''),
      'publisher': new FormControl(''),
      'pages': new FormControl(''),
      'description': new FormControl(''),
      'website': new FormControl(''),
    })
  }

    createBook(){
      this.bookService.createBook(this.addBookForm.value).subscribe(data=>{
        console.log("Book Created")
      }, err =>{
        console.log(err);
      })
      
    }
}
