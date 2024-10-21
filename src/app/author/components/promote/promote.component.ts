import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { PromotionService} from "../../services/promotion.service";
import { PublishedBook } from "../../model/published-book.entity";
import { PublishedBooksService } from "../../services/published-books.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-promote',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, FormsModule, DatePipe, TranslateModule],
  templateUrl: './promote.component.html',
  styleUrl: './promote.component.css'
})

export class PromoteComponent implements OnInit {
  value: number = 100;
  startDate: Date = new Date();
  endDate: Date = new Date();
  selectedBook?: PublishedBook;

  constructor(
    private promotionService: PromotionService,
    private publishedBooksService: PublishedBooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.calculateEndDate();
  }

  ngOnInit() {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));

    if (bookId) {
      this.publishedBooksService.getPublishedBookById(bookId).subscribe(book => {
        this.selectedBook = book;
      });
    }
  }

  calculateEndDate(): void {
    const endDate = new Date(this.startDate);
    endDate.setDate(this.startDate.getDate() + 30);
    this.endDate = endDate;
  }

  promoteBook() {
    if (!this.selectedBook) {
      console.error('No book selected for promotion');
      return;
    }

    // Actualizar el estado de "promocionado" del libro
    const updatedBook = { ...this.selectedBook, promocionado: true };

    this.publishedBooksService.updatePublishedBook(updatedBook).subscribe(() => {
      console.log('Book promoted:', updatedBook);

      this.router.navigate(['/library']);
    });
  }

}
