import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/navigation/topbar/topbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { PerfilComponent } from './pages/usuario/perfil/perfil.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { EmpleadosComponent } from './pages/admin/empleados/empleados.component';
import { PedidosComponent } from './pages/admin/pedidos/pedidos.component';
import { FooterComponent } from './components/navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    ConocenosComponent,
    CarritoComponent,
    PerfilComponent,
    ProductosComponent,
    EmpleadosComponent,
    PedidosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
