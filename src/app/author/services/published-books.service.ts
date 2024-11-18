import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, of} from "rxjs";
import { PublishedBook } from "../model/published-book.entity";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class PublishedBooksService {

  protected apiUrl = `${environment.serverBasePath}`
  private library: PublishedBook[] = [];

  constructor(private http: HttpClient) {}

  // Método para obtener libros publicados
  getPublishedBooks(): Observable<PublishedBook[]> {
    // Usamos la URL base combinada con el resourceEndpoint
    return this.http.get<PublishedBook[]>(this.apiUrl);
  }

  // Obtener un libro publicado por su ID
  getPublishedBookById(id: number): Observable<PublishedBook> {
    return this.http.get<PublishedBook>(`this.apiUrl}/${id}`);
  }

  // Obtener todos los libros publicados de la biblioteca
  getLibraryPublishedBooks(): Observable<PublishedBook[]> {
    return of(this.library);  // Devuelve los libros de la biblioteca
  }

  // Añadir un libro publicado a la biblioteca
  addPublishedBookToLibrary(publishedBook: PublishedBook): Observable<PublishedBook> {
    this.library.push(publishedBook);  // Añadir el libro al arreglo de la biblioteca
    this.saveLibrary();  // Guardar la biblioteca en localStorage
    return of(publishedBook);  // Retornar el libro añadido
  }

  // Eliminar un libro publicado de la biblioteca
  removePublishedBookFromLibrary(publishedBookId: number): Observable<PublishedBook[]> {
    this.library = this.library.filter(publishBook => publishBook.id !== publishedBookId);  // Filtrar el libro a eliminar
    this.saveLibrary();  // Guardar los cambios en localStorage
    return of(this.library);
  }

  // Guardar la biblioteca en localStorage
  private saveLibrary(): void {
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  /* Obtener la biblioteca desde localStorage al iniciar
  private loadLibrary(): void {
    const libraryData = localStorage.getItem('library');
    if (libraryData) {
      this.publishedBooks = JSON.parse(libraryData);
      console.log('Library loaded from localStorage:', this.publishedBooks);  // Verifica que los datos se han cargado correctamente
    } else {
      console.log('No books in library found in localStorage');
    }
  }*/
}
