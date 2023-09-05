import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageDataBindingComponent } from './components/data-binding/page-data-binding/page-data-binding.component';
import { PageFormDerComponent } from './components/form-der/page-form-der/page-form-der.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/lab6/products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-binding', component: PageDataBindingComponent },
  { path: 'form', component: PageFormDerComponent },
  { path: 'service', component: UsersComponent },
  { path: 'lab6', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
