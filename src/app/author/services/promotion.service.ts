import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PromotionItem } from "../model/promotion-item.entity";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiUrl = 'http://localhost:3000/promotions'; // Ajustar a tu API

  constructor(private http: HttpClient) {}

  // Obtener una promoción específica
  getPromotion(id: number): Observable<PromotionItem> {
    return this.http.get<PromotionItem>(`${this.apiUrl}/${id}`);
  }

  // Activar una promoción
  activatePromotion(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/activate`, {});
  }

  // Pausar una promoción
  pausePromotion(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/pause`, {});
  }

  // Reanudar una promoción
  resumePromotion(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/resume`, {});
  }

  // Finalizar una promoción
  endPromotion(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/end`, {});
  }
}
