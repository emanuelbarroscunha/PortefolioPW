import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { CorComponent } from './components/cor/cor.component';
import { EvComponent } from './components/ev/ev.component';
import { ForOforComponent } from './components/for-ofor/for-ofor.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/lista-de-compras/add/add.component';
import { BuyComponent } from './components/lista-de-compras/buy/buy.component';
import { ListaDeComprasComponent } from './components/lista-de-compras/lista-de-compras.component';

const routes: Routes = [
  {path:"",redirectTo: "/home",pathMatch:'full'},
  {path:"home",component: HomeComponent},
  {path:"cookies",component: CookiesComponent},
  {path:"chuck",component: ChuckComponent},
  {path:"listaDeCompras",component: ListaDeComprasComponent},
  {path:"notFound",component: ForOforComponent},
  {path:"calculadora",component: CalculadoraComponent},
  {path:"buy",component: BuyComponent},
  {path:"add",component: AddComponent},
  {path:"ev",component:EvComponent},
  {path:"listaDeCompras", component: ListaDeComprasComponent,
  children:
    [
      {path:"add", component: AddComponent},
      {path:"buy", component: BuyComponent},
    ]
  },
  {path:"p-color", component: CorComponent,
  children:
    [
      {path:":color", component: CorComponent}
    ]
  },
  {path:"**",redirectTo:"notFound"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
