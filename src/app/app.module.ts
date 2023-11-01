import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    NotFoundComponent, 
    AdminComponent, AccueilComponent, ProductsComponent, RegisterComponent, LoginComponent, AddProductComponent, UpdateProductComponent, DeleteProductComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    NgSelectModule,
  
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
