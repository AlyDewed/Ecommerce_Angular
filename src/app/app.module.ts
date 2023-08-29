import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ScategoriesModule } from './scategories/scategories.module';
import { NavscrollComponent } from './navscroll/navscroll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavscrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule,
    CategoriesModule,
    ScategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
