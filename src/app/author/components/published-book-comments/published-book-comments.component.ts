import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublishedBooksService } from "../../services/published-books.service";
import { PublishedBook } from "../../model/published-book.entity";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-published-book-comments',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './published-book-comments.component.html',
  styleUrl: './published-book-comments.component.css'
})

export class PublishedBookCommentsComponent {
  publishedBook: PublishedBook | undefined;
  formatoSeleccionado: string | undefined;

  constructor(
    private publishedBooksService: PublishedBooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const publishedBookId = this.route.snapshot.paramMap.get('id');
    if (publishedBookId) {
      this.publishedBooksService.getPublishedBookById(+publishedBookId).subscribe((data: PublishedBook) => {
        this.publishedBook = data;
      });
    }
  }

  seleccionarFormato(formato: string): void {
    this.formatoSeleccionado = formato;  // Almacena el formato seleccionado
  }
}
