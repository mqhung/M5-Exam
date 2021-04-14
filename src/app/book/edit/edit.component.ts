import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {Subscription} from 'rxjs';
import {BookService} from '../../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  id: number;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBookById(this.id);
    });
  }

  ngOnInit(): void {
  }

  getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(book => {
      this.book = book;
    });
  }

  updateBook() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
