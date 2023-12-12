import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthLayout } from '../layout/auth/AuthLayout';
import { DashBoardLayout } from '../layout/dashboard/DashBoardLayout'
import {PublicLayout} from '../layout/publicLayout/PublicLayout'

import {
  rutaDash,
  rutaInventario,
  rutaUsuarios,
  rutaLogin,
  rutaRoles,
  rutaRutas,
  rutaInicio,
  rutaVentas,
  rutaPostVenta,
  rutaSucursales,
  rutaProductos,
} from './rutas';
import { Inicio, Login, Roles, Rutas, Usuarios } from '../pages';
import { VentasPage } from '../pages/private/dashboard/venta/VentasPage';
import { Venta } from '../pages/private/dashboard/venta/Venta';
import { FacturaVentaPDF } from '../components/factura/FacturaVentaPDF';
import { Sucursales } from '../pages/private/dashboard/sucusales/Sucursales';
import { ProductosPage } from '../pages/private/dashboard/productos/ProductosPage';
import { InventarioPage } from '../pages/private/dashboard/inventario/InventarioPage';
import { Dash } from '../pages/private/dashboard/dash/dash';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route element={<PublicLayout />}>
          <Route path={rutaInicio} element={<Inicio />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={rutaLogin} element={<Login />} />
        </Route>

        <Route path="/facturaventa" element={<FacturaVentaPDF />} />

        {/* RUTAS PRIVADAS */}
        <Route element={<DashBoardLayout />}>
          <Route path={rutaUsuarios} element={<Usuarios />} />
          <Route path={rutaRoles} element={<Roles/>} />
          <Route path={rutaRutas}element={<Rutas/>} />
          <Route path={rutaVentas} element={<VentasPage />} />
          <Route path={rutaPostVenta} element={<Venta />} />
          <Route path={rutaSucursales} element={<Sucursales />} />
          <Route path={rutaProductos} element={<ProductosPage />} />
          <Route path={rutaInventario} element={<InventarioPage />} />
          <Route path={rutaDash} element={<Dash />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};