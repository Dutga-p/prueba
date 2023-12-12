import React, { useEffect, useState } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { Column, DataTableComponent } from '../../../../../components';
import { ToolbarProductos } from './ToolbarProductos';
import { getRepuestosData, getVehiculosData } from '../../../../../services/productoService';
import BotonEditaProductos from './BotonEditaProductos';

export const TablaProductos = () => {
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
        const response = await getVehiculosData();
        console.log(response.data);
        setProductos(response.data);
    };

    const fetchRepuestos = async () => {
        const response = await getRepuestosData();
        console.log(response.data);
        setProductos(response.data);
    };
  
    const [TableComponent, dt] = DataTableComponent();

    const columnsVehiculo = [
        { field: 'vehiculoId', header: 'ID' },
        { field: 'nombre', header: 'Nombre' },
        { field: 'img', header: 'Imagen' },
        { field: 'marca', header: 'Marca' },
        { field: 'modelo', header: 'Modelo' },
        { field: 'color', header: 'Color' },
        { field: 'precio', header: 'Precio' },
    ];

    const columnsRepuesto = [
        { field: 'repuestoId', header: 'ID' },
        { field: 'descripcion', header: 'Nombre' },
        { field: 'img', header: 'Imagen' },
        { field: 'precio', header: 'Precio' },
        { field: 'fechaFabriacion', header: 'Fecha fabricacion' },
    ];

    const accionesTemplate = () => {
        return (
          <>
            <button className='btn btn-warning mr-2'>
              <i className='pi pi-pencil'></i>
            </button>
            <button className='btn btn-danger'>
              <i className='pi pi-trash'></i>
            </button>
          </>
        );
      };
  
    return (
      <div className='bg-white rounded-md shadowContainer card p-6'>
        <ToolbarProductos dt={dt} setActualizar={setActualizar} tipoProducto={tipoProducto}/>

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
            
            <Column
          header='Editar'
          body={(rowData) => {
            return (<BotonEditaProductos data={rowData} setActualizar={setActualizar} tipoProducto={tipoProducto}/>);
          }}
        />
          </TableComponent>
          )}
        </div>
      </div>
    );
  };