import { Routes } from '@angular/router';

import { StoreComponent } from "./public/pages/store/store.component";
import { PublishBookComponent } from "./author/pages/publish-book/publish-book.component";
import { LibraryComponent } from "./author/pages/library/library.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { BookDetailsComponent } from "./author/components/book-details/book-details.component";

export const routes: Routes = [
  { path: 'store/store-books', component: StoreComponent },
  { path: 'publish-book', component: PublishBookComponent },
  { path: 'library', component: LibraryComponent},
  { path: 'books/:id', component: BookDetailsComponent },
  { path: '', redirectTo: 'store/store-books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
