import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, of} from 'rxjs';
import { Book } from '../model/book-entity/book.entity';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:8090/book';  // Asegúrate de que esta URL sea correcta
  filteredBooks: Book[] = [];  // Aquí almacenamos los libros filtrados

  private library: Book[] = [];  // Arreglo para almacenar la biblioteca

  constructor(private http: HttpClient) {}

  // Obtener todos los libros
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // Obtener un libro por su ID
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  // Obtener todos los libros de la biblioteca
  getLibraryBooks(): Observable<Book[]> {
    return of(this.library);  // Devuelve los libros de la biblioteca
  }

  // Añadir un libro a la biblioteca
  addBookToLibrary(book: Book): Observable<Book> {
    this.library.push(book);  // Añadir el libro al arreglo de la biblioteca
    this.saveLibrary();  // Guardar la biblioteca en localStorage
    return of(book);  // Retornar el libro añadido
  }

  // Eliminar un libro de la biblioteca
  removeBookFromLibrary(bookId: number): Observable<Book[]> {
    this.library = this.library.filter(book => book.id !== bookId);  // Filtrar el libro a eliminar
    this.saveLibrary();  // Guardar los cambios en localStorage
    return of(this.library);
  }

  // Guardar la biblioteca en localStorage
  private saveLibrary(): void {
    localStorage.setItem('library', JSON.stringify(this.library));
  }

  // Filter books by title, author, and category
  filterBooks(title: string, author: string, category: string): Observable<Book[]> {
    return this.getAllBooks().pipe(
      map(books => books.filter(book =>
        (title ? book.titulo.toLowerCase().includes(title.toLowerCase()) : true) &&
        (author ? book.autor.toLowerCase().includes(author.toLowerCase()) : true) &&
        (category ? book.categoria.toLowerCase().includes(category.toLowerCase()) : true)
      ))
    );
  }
}
