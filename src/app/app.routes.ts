import { Routes } from '@angular/router';
import { CartComponent } from './store/pages/cart/cart.component';
import { BookSearchComponent } from './store/components/book-search/book-search.component';
import { StoreBooksComponent } from "./store/pages/store-books/store-books.component";
import { PaymentPageComponent } from './store/pages/payment-page/payment-page.component';
import { AddBookComponent } from './store/components/add-book/add-book.component';
import { ProfileComponent } from './profile/pages/profile.component';
import { StoreComponent } from "./public/pages/store/store.component";
import { PublishBookComponent } from "./author/pages/publish-book/publish-book.component";
import { LibraryComponent } from "./author/pages/library/library.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { BookDetailsComponent } from "./author/components/book-details/book-details.component";

export const routes: Routes = [
  { path: 'store', component: StoreBooksComponent },
  { path: 'cart', component: CartComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'profile/:id/:type', component: ProfileComponent },  // Route for profile
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'search', component: BookSearchComponent },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: 'store/store-books', component: StoreComponent },
  { path: 'publish-book', component: PublishBookComponent },
  { path: 'library', component: LibraryComponent},
  { path: 'books/:id', component: BookDetailsComponent },
  { path: '', redirectTo: 'store/store-books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
