import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarEmpleadoComponent } from './pages/admin/actualizar-empleado/actualizar-empleado.component';
import { ActualizarPerfilComponent } from './pages/usuario/actualizar-perfil/actualizar-perfil.component';
import { ActualizarProductoComponent } from './pages/admin/actualizar-producto/actualizar-producto.component';
import { DetalleEmpleadoComponent } from './pages/admin/detalle-empleado/detalle-empleado.component';
import { DetallePedidoComponent } from './pages/usuario/detalle-pedido/detalle-pedido.component';
import { DetalleProductoComponent } from './pages/admin/detalle-producto/detalle-producto.component';
import { EmpleadosComponent } from './pages/admin/empleados/empleados.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { RegistroEmpleadoComponent } from './pages/admin/registro-empleado/registro-empleado.component';
import { RegistroProductoComponent } from './pages/admin/registro-producto/registro-producto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/usuario/perfil/perfil.component';
import { PedidosComponent } from './pages/usuario/pedidos/pedidos.component';

const routes:Routes = [

  /*ADMIN*/
  {path:'admin/detalle-empleado',component: DetalleEmpleadoComponent},
  {path:'admin/empleados',component: EmpleadosComponent},
  {path:'admin/productos',component: ProductosComponent},
  {path:'admin/registro-empleado',component: RegistroEmpleadoComponent},
  {path:'admin/registro-producto',component: RegistroProductoComponent},
  {path:'admin/actualizar-producto/:codigo',component: ActualizarProductoComponent},
  {path:'admin/actualizar-empleado',component: ActualizarEmpleadoComponent},

  /*USUARIO*/
  {path:'perfil',component: PerfilComponent},
  {path:'actualizar-perfil',component: ActualizarPerfilComponent},
  {path:'pedidos',component: PedidosComponent},
  {path:'detalle/pedido',component: DetallePedidoComponent},

  /*PAGINA*/
  {path:'home',component: HomeComponent},
  {path:'conocenos',component: ConocenosComponent},
  {path:'carrito',component: CarritoComponent},
  {path:'login',component: LoginComponent},
  {path:'registro',component: RegistroComponent},
  {path:'menu/:categoria',component: MenuComponent},
  {path:'menu/platillo/:platillo',component: DetalleProductoComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
