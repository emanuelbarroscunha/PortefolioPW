import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { HttpClientModule } from '@angular/common/http';
import { ForOforComponent } from './components/for-ofor/for-ofor.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { RegistoComponent } from './components/registo/registo.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { TestarComponent } from './components/testar/testar.component';
import { CorComponent } from './components/cor/cor.component';
import { EvComponent } from './components/ev/ev.component';


@NgModule({
  declarations: [
    AppComponent,
    ChuckComponent,
    ForOforComponent,
    NotFoundComponent,
    ListaDeComprasComponent,
    NavBarComponent,
    HomeComponent,
    BuyComponent,
    AddComponent,
    RegistoComponent,
    CalculadoraComponent,
    CookiesComponent,
    TestarComponent,
    CorComponent,
    EvComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
