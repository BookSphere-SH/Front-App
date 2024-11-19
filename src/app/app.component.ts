import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import { LanguageSwitcherComponent } from "./public/pages/language-switcher/language-switcher.component";
import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { CartService } from './store/services/cart.service';  // Verifica la ruta
import { CommonModule } from '@angular/common';
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, LanguageSwitcherComponent, NgIf, MatIconModule, MatMenuTrigger, MatMenu, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'Booksphere';
cartCount: number = 0;
  constructor(translate: TranslateService, private cartService: CartService) {
    translate.setDefaultLang('en');
    translate.use('en');

  }
ngOnInit() {
    // Suscribimos al observable cartItems$ para obtener el número de ítems en el carrito
    this.cartService.cartItems$.subscribe((cartItems: any[]) => {
      this.cartCount = cartItems.length;
    });
  }
  options = [
    { path: '/store', icon: 'library_books', title: 'Store'},
    { path: '/profile', title: 'Profile'}
  ];



}
