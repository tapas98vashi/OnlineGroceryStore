import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SlotsComponent } from './slots/slots.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'slots', component: SlotsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
