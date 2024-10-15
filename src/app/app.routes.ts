import { Routes } from '@angular/router';

import { StoreComponent } from "./public/pages/store/store.component";
import { PublishBookComponent } from "./author/pages/publish-book/publish-book.component";
import { LibraryComponent } from "./author/pages/library/library.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { ViewDetailsPublishedBookComponent } from "./author/components/view-details-published-book/view-details-published-book.component";

export const routes: Routes = [
  { path: 'store/store-books', component: StoreComponent },
  { path: 'publish-book', component: PublishBookComponent },
  { path: 'library', component: LibraryComponent},
  { path: 'published-books/:id', component: ViewDetailsPublishedBookComponent },
  { path: '', redirectTo: 'store/store-books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
