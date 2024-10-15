import {Comment} from "./comment.entity";

export class PublishedBook {
  id: number;
  autor: string;
  titulo: string;
  categorias: string[];
  descripcion: string;
  precio: number;
  formato: string[];
  portada: string;
  comments: Comment[];

  constructor() {
    this.id = 0;
    this.autor = '';
    this.titulo = '';
    this.categorias = [];
    this.descripcion = '';
    this.precio = 0;
    this.formato = [];
    this.portada = 'https://perpustakaan.pom.go.id/images/default/image.png';
    this.comments = [];
  }
}
