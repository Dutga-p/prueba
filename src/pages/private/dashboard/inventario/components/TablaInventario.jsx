import React, { useEffect, useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { Column, DataTableComponent } from '../../../../../components';
import { repuestosInventario, vehiculosInventario } from '../../../../../data/Inventario';
import { ToolbarInventario } from './ToolbarInventario';
import { getInventarioRepuestoService, getInventarioVehiculoService } from '../../../../../services/inventarioService';
import { set } from 'react-hook-form';

export const TablaInventario = () => {
    const [productos, setProductos] = useState([]);
    const [actualizar, setActualizar] = useState('');
    const [tipoProducto, setTipoProducto] = useState(null);

    const tipoProductoItems = [
        { label: 'vehiculo', value: 'vehiculo' },
        { label: 'repuesto', value: 'repuesto' }
    ];
  
    useEffect(() => {
      console.log(tipoProducto)
      try{
        if(tipoProducto === 'vehiculo'){
          fetchVehiculos();
        }
        if(tipoProducto === 'repuesto'){
          fetchRepuestos();
        }
      } catch(error){
        console.log(error);
      }
    }, [actualizar, tipoProducto]);

    const fetchVehiculos = async () => {
        const response = await getInventarioVehiculoService();
        setProductos(response);
    };

    const fetchRepuestos = async () => {    
        const response = await getInventarioRepuestoService();
        setProductos(response);
        return response;
    };
  
    const [TableComponent, dt] = DataTableComponent();

    const columnsVehiculo = [
        { field: 'id', header: 'ID' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'img', header: 'Imagen' },
        { field: 'marca', header: 'Marca' },
        { field: 'precio', header: 'Precio' },
        { field: 'cantidad', header: 'Cantidad' },
    ];

    const columnsRepuesto = [
        { field: 'id', header: 'ID' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'img', header: 'Imagen' },
        { field: 'precio', header: 'Precio' },
        { field: 'cantidad', header: 'Cantidad' },
    ];

    return (
      <div className='bg-white rounded-md shadowContainer card p-6'>
        <ToolbarInventario dt={dt} setActualizar={setActualizar} tipoProducto={tipoProducto}/>

        <div className="space-y-6">
          <Dropdown value={tipoProducto} options={tipoProductoItems} onChange={(e) => setTipoProducto(e.value)} className="w-full" placeholder="Seleccione un tipo de producto" />
          {tipoProducto && (
          <TableComponent data={productos}>
            {tipoProducto === 'vehiculo' && columnsVehiculo.map(column => {
              if(column.field === 'img'){
                return <Column key={column.field} field={column.field} header={column.header} sortable body={(rowData) => <img src={rowData.img} alt="Imagen" className="h-20 w-20" />} />;
              } else {
                return <Column key={column.field} field={column.field} header={column.header} sortable filter />;
              }
            })}
            {tipoProducto === 'repuesto' && columnsRepuesto.map(column => {
              if(column.field === 'img'){
                return <Column key={column.field} field={column.field} header={column.header} sortable body={(rowData) => <img src={rowData.img} alt="Imagen" className="h-20 w-20" />} />;
              } else {
                return <Column key={column.field} field={column.field} header={column.header} sortable filter/>;
              }
            })}
            
            {/* <Column
          header='Editar'
          body={(rowData) => {
            return (<BotonEditaProductos data={rowData} setActualizar={setActualizar} tipoProducto={tipoProducto}/>);
          }}
        /> */}
          </TableComponent>
          )}
        </div>
      </div>
    );
  };