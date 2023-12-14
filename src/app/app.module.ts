import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpLink } from 'apollo-angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisesComponent } from './home/paises/paises.component';
import { Vista01Component } from './home/vista01/vista01.component';
import { Vista02Component } from './home/vista02/vista02.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { DetailCountryComponent } from './components/detail-country/detail-country.component';
import { GraphQLModule } from './graphql.module';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';

@NgModule({
  declarations: [
    AppComponent,
    CardCountryComponent,
    HomeComponent,
    MenuComponent,
    PaisesComponent,
    Vista01Component,
    Vista02Component,
    DetailCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    GraphQLModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://countries.trevorblades.com/',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
