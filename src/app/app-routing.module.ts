import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecompComponent } from './homecomp/homecomp.component';
import { DeckcompComponent } from './deckcomp/deckcomp.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomecompComponent },
  { path: 'Deck', component: DeckcompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
