import {Component, OnInit} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from "@angular/router";
import { PublishedBooksService } from "../../services/published-books.service";
import { PublishedBook } from "../../model/published-book.entity";
import { TranslateModule } from "@ngx-translate/core";

interface BookStatistics {
  week: number;
  interestedReaders: number;
  physicalPurchases: number;
  digitalDownloads: number;
}

@Component({
  selector: 'app-statistics-published-book',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, TranslateModule],
  templateUrl: './statistics-published-book.component.html',
  styleUrl: './statistics-published-book.component.css'
})

export class StatisticsPublishedBookComponent implements OnInit {
  displayedColumns: string[] = ['week', 'interestedReaders', 'physicalPurchases', 'digitalDownloads'];
  bookId: number = 0;
  book: any;
  bookStatistics: BookStatistics[] = [];
  totalInterestedReaders: number = 0;
  totalPhysicalPurchases: number = 0;
  totalDigitalDownloads: number = 0;

  constructor(
    private route: ActivatedRoute,
    private publishedBooksService: PublishedBooksService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del libro desde la ruta
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));

    // Obtener los datos del libro a partir del servicio
    this.publishedBooksService.getPublishedBookById(this.bookId).subscribe((book: any) => {
      this.book = book;
      console.log(this.book);  // Verifica los datos aquí
      this.loadWeeklyStatistics();
    });
  }

  loadWeeklyStatistics(): void {
    if (this.book && this.book.statistics && this.book.statistics.length > 0) {
      const statistics = this.book.statistics[0];  // Tomamos el primer set de estadísticas

      const weeks = statistics.interestedReaders.length;

      for (let i = 0; i < weeks; i++) {
        this.bookStatistics.push({
          week: i + 1,  // Número de semana
          interestedReaders: statistics.interestedReaders[i] || 0,
          physicalPurchases: statistics.physicalPurchases[i] || 0,
          digitalDownloads: statistics.digitalDownloads[i] || 0
        });
      }

      // Calcular totales
      this.totalInterestedReaders = statistics.interestedReaders.reduce((acc: number, val: number) => acc + val, 0);
      this.totalPhysicalPurchases = statistics.physicalPurchases.reduce((acc: number, val: number) => acc + val, 0);
      this.totalDigitalDownloads = statistics.digitalDownloads.reduce((acc: number, val: number) => acc + val, 0);

      // Verifica el contenido de bookStatistics
      console.log(this.bookStatistics);  // Agrega este log para ver los datos llenados
    } else {
      console.log('No statistics available');
    }
  }

  protected readonly PublishedBook = PublishedBook;
}
