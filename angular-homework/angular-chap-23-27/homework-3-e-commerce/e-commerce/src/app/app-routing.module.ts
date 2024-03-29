import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/Admin', pathMatch: 'full'},
  {path: 'Admin', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: '404', component: PageNotFoundComponent},
  // {path: 'products/:id', component: ProductListComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
