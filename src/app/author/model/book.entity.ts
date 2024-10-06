export class Book {
  id: number;
  autor: string;
  titulo: string;
  descripcion: string;
  resumen: string;
  fecha_publicacion: string;
  isbn: string;
  formato: string;
  precio: number;
  categoria: string;
  ruta_archivo: string;
  portada: string;
  pagado: boolean;

  constructor() {
    this.id = 0;
    this.autor = '';
    this.titulo = '';
    this.descripcion = '';
    this.resumen = '';
    this.fecha_publicacion = '';
    this.isbn = '';
    this.formato = '';
    this.precio = 0;
    this.categoria = '';
    this.ruta_archivo = '';
    this.portada = '';
    this.pagado = false;
  }
}
