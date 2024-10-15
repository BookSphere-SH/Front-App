import { Component, OnInit } from '@angular/core';
import { PromotionService} from "../../services/promotion.service";
import { PromotionItem } from "../../model/promotion-item.entity";

@Component({
  selector: 'app-promote',
  standalone: true,
  imports: [],
  templateUrl: './promote.component.html',
  styleUrl: './promote.component.css'
})

export class PromoteComponent implements OnInit{
  promotion: PromotionItem | null = null;
  mensaje: string | null = null;
  promotionId = 1;  // El ID de la promoción, podrías obtenerlo dinámicamente

  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.loadPromotion();
  }

  // Cargar la promoción
  loadPromotion(): void {
    this.promotionService.getPromotion(this.promotionId).subscribe(
      (data) => this.promotion = data,
      (error) => console.error('Error al cargar la promoción', error)
    );
  }

  // Activar la promoción
  activatePromotion(): void {
    this.promotionService.activatePromotion(this.promotionId).subscribe(
      () => {
        this.mensaje = 'La promoción ha sido activada.';
        this.loadPromotion();  // Recargar los datos
      },
      (error) => this.mensaje = 'Error al activar la promoción.'
    );
  }

  // Pausar la promoción
  pausePromotion(): void {
    this.promotionService.pausePromotion(this.promotionId).subscribe(
      () => {
        this.mensaje = 'La promoción ha sido pausada.';
        this.loadPromotion();
      },
      (error) => this.mensaje = 'Error al pausar la promoción.'
    );
  }

  // Reanudar la promoción
  resumePromotion(): void {
    this.promotionService.resumePromotion(this.promotionId).subscribe(
      () => {
        this.mensaje = 'La promoción ha sido reanudada.';
        this.loadPromotion();
      },
      (error) => this.mensaje = 'Error al reanudar la promoción.'
    );
  }

  // Finalizar la promoción
  endPromotion(): void {
    this.promotionService.endPromotion(this.promotionId).subscribe(
      () => {
        this.mensaje = 'La promoción ha sido finalizada.';
        this.loadPromotion();
      },
      (error) => this.mensaje = 'Error al finalizar la promoción.'
    );
  }
}
