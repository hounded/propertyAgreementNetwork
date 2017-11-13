import 'rxjs/add/operator/finally';

import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService, private router: Router) {}

  test() {
    this.router.navigate(['../agreements']);
  }
  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .finally(() => { this.isLoading = false; })
      .subscribe((quote: string) => { this.quote = quote; });
  }

}
