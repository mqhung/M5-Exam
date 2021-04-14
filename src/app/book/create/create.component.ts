import { Component, OnInit } from '@angular/core';
import {Book} from '../../book';
import {BookService} from '../../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  constructor(private bookService: BookService,
              private router: Router) {
  }
  ngOnInit(): void {
  }

  createBook(){
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    })
  }
}
