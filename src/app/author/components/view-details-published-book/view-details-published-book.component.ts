import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublishedBooksService } from "../../services/published-books.service";
import { PublishedBook } from "../../model/published-book.entity";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PublishedBookCommentsComponent } from "../published-book-comments/published-book-comments.component";

@Component({
  selector: 'app-view-details-published-book',
  standalone: true,
  imports: [CommonModule, MatIconModule, PublishedBookCommentsComponent],
  templateUrl: './view-details-published-book.component.html',
  styleUrl: './view-details-published-book.component.css'
})
export class ViewDetailsPublishedBookComponent implements OnInit {
  publishedBook: PublishedBook | undefined;

  constructor(private route: ActivatedRoute, private publishedBooksService: PublishedBooksService, private router: Router) {
  }

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails(): void {
    const publishedBookId = Number(this.route.snapshot.paramMap.get('id'));
    this.publishedBooksService.getPublishedBookById(publishedBookId).subscribe((response: PublishedBook) => {
      this.publishedBook = response;
    });
  }
}
