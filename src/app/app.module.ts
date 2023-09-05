import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/data-binding/profile/profile.component';
import { CommentComponent } from './components/data-binding/comment/comment.component';
import { EventBindingComponent } from './components/data-binding/event-binding/event-binding.component';
import { PageDataBindingComponent } from './components/data-binding/page-data-binding/page-data-binding.component';
import { CardComponent } from './components/data-binding/card/card.component';
import { BioInputComponent } from './components/data-binding/bio-input/bio-input.component';
import { PageFormDerComponent } from './components/form-der/page-form-der/page-form-der.component';
import { FormComponent } from './components/form-der/form/form.component';
import { FormDisplayComponent } from './components/form-der/form-display/form-display.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/lab6/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    CommentComponent,
    EventBindingComponent,
    PageDataBindingComponent,
    CardComponent,
    BioInputComponent,
    PageFormDerComponent,
    FormComponent,
    FormDisplayComponent,
    UsersComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
