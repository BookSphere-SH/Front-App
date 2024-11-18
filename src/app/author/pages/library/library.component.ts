import { Component, OnInit } from '@angular/core'
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { PublishedBooksService } from "../../services/published-books.service";
import { PublishedBook } from "../../model/published-book.entity";


@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})

export class LibraryComponent implements OnInit{
  library: PublishedBook[] = [];  // Arreglo para almacenar los libros

  constructor(private publishedBooksService: PublishedBooksService) {}

  ngOnInit(): void {
    this.getLibraryPublishedBooks();
  }

  getLibraryPublishedBooks(): void {
    const storedLibrary = localStorage.getItem('library');
    if(storedLibrary) {
      console.log('Cargando libros publicados desde localStorage');
      this.library = JSON.parse(storedLibrary);
    } else {
      this.publishedBooksService.getLibraryPublishedBooks().subscribe({
        next: (publishedBooks: PublishedBook[]) => {
          console.log('Libros obtenidos desde el servicio:', publishedBooks);
          this.library = publishedBooks;
          this.updateLocalStorage();
        },
        error: (error) => {
          console.error('Error obteniendo los libros publicados desde el servicio:', error);
        },
        complete: () => {
          console.log('La suscripción se completó correctamente.');
        }
      });
    }
  }

  updateLocalStorage() {
    localStorage.setItem('library', JSON.stringify(this.library));
    console.log('LocalStorage actualizado con la nueva lista de libros');
  }

  goToDetails(publishedBookId: number): void {
    console.log('Redirigiendo a la página de detalles del libro publicado con ID:', publishedBookId);
    window.location.href = `/published-books/${publishedBookId}`;
  }
}
