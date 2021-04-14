import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
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
}
