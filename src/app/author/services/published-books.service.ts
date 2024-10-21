import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { PublishedBook } from "../model/published-book.entity";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class PublishedBooksService {

  protected apiUrl = `${environment.serverBasePath}`
  private urlPublishedBooks = this.apiUrl+"/published-books";

  constructor(private http: HttpClient) {}

  // Método para obtener libros publicados
  getPublishedBooks(): Observable<PublishedBook[]> {
    // Usamos la URL base combinada con el resourceEndpoint
    return this.http.get<PublishedBook[]>(this.urlPublishedBooks);
  }

  // Obtener un libro publicado por su ID
  getPublishedBookById(id: number): Observable<PublishedBook> {
    return this.http.get<PublishedBook>(`${this.urlPublishedBooks}/${id}`);
  }

  // Añadir un libro publicado a la biblioteca
  addPublishedBookToLibrary(publishedBook: PublishedBook) {
    return this.http.post(this.urlPublishedBooks, publishedBook);
  }

  updatePublishedBook(book: PublishedBook): Observable<PublishedBook> {
    return this.http.put<PublishedBook>(`${this.urlPublishedBooks}/${book.id}`, book);
  }
}
