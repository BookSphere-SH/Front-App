import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublishedBooksService } from "../../services/published-books.service";
import { PublishedBook } from "../../model/published-book.entity";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-published-book-comments',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, FormsModule, MatButtonModule],
  templateUrl: './published-book-comments.component.html',
  styleUrl: './published-book-comments.component.css'
})

export class PublishedBookCommentsComponent implements OnInit {
  publishedBook: any;

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

  // Método para responder a un comentario
  responderComentario(comment: any): void {
    comment.mostrandoRespuesta = !comment.mostrandoRespuesta;
  }

  // Método para enviar la respuesta
  enviarRespuesta(comment: any): void {
    if (comment.respuesta && comment.respuesta.trim()) {
      console.log(`Respuesta enviada: ${comment.respuesta}`);
      comment.mostrandoRespuesta = false;
    } else {
      alert("Por favor escriba una respuesta antes de enviar.")
    }
  }

  // Método para reportar un comentario
  reportarComentario(comment: any): void {
    console.log(`Comentario reportado: ${comment.content}`);
    alert('Has reportado este comentario como ofensivo o spam.');
  }
}
