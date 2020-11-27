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
import { PedidosComponent } from './pages/usuario/pedidos/pedidos.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { DetallePedidoComponent } from './pages/usuario/detalle-pedido/detalle-pedido.component';
import { DetalleEmpleadoComponent } from './pages/admin/detalle-empleado/detalle-empleado.component';
import { DetalleProductoComponent } from './pages/admin/detalle-producto/detalle-producto.component';
import { ActualizarPerfilComponent } from './pages/usuario/actualizar-perfil/actualizar-perfil.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CategorybarComponent } from './components/navigation/categorybar/categorybar.component';
import { RegistroEmpleadoComponent } from './pages/admin/registro-empleado/registro-empleado.component';
import { RegistroProductoComponent } from './pages/admin/registro-producto/registro-producto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActualizarProductoComponent } from './pages/admin/actualizar-producto/actualizar-producto.component';
import { ActualizarEmpleadoComponent } from './pages/admin/actualizar-empleado/actualizar-empleado.component';

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
    FooterComponent,
    DetallePedidoComponent,
    DetalleEmpleadoComponent,
    DetalleProductoComponent,
    ActualizarPerfilComponent,
    PageNotFoundComponent,
    RegistroComponent,
    CategorybarComponent,
    RegistroEmpleadoComponent,
    RegistroProductoComponent,
    ActualizarProductoComponent,
    ActualizarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
