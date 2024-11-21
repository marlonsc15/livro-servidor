import { Routes } from '@angular/router';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

export const routes: Routes = [
    { path: 'lista', component: LivroListaComponent },
    { path: 'dados', component: LivroDadosComponent },
    { path: '', redirectTo: '/lista', pathMatch: 'full' },
];
