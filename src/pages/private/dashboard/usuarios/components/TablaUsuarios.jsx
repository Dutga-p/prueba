import React, { useEffect, useState } from 'react';
import { DataTableComponent, Column } from '../../../../../components';
import {ToolbarUsuarios} from './ToolbarUsuarios'
import BotonEditarUsuario from './BotonEditarUsuario';
import BotonEliminarUsuario from './BotonEliminarUsuario';
import { getUserData } from '../../../../../services';

export const TablaUsuarios = () => {
  const [users, setUsers] = useState([]);
  const [actualizar, setActualizar] = useState(false);
  
  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const data = await getUserData();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsuarios();
  }, [actualizar]);
  
  const [TableComponent, dt] = DataTableComponent();
  const columns = [
    { field: 'idUsuario', header: 'Id' },
    { field: 'username', header: 'Usuario' },
    { field: 'rol_name', header: 'Rol' },
    { field: 'nombre', header: 'Nombre' },
    { field: 'apellido', header: 'Apellido' },
    { field: 'email', header: 'Email' },
    { field: 'direccion', header: 'Direccion' },
    { field: 'telefono', header: 'Telefono' },
  ];

  return (
    <div className='bg-white rounded-md shadowContainer card p-6'>
      <ToolbarUsuarios dt={dt} setActualizar={setActualizar}/>

      <TableComponent columns={columns} data={users}>
        {columns.map((column, index) => (
          <Column
            key={index}
            field={column.field}
            header={column.header}
            sortable
            filter
          />
        ))}

        <Column
          header='Editar'
          body={(rowData) => {
            return (<BotonEditarUsuario data={rowData} />);
          }}
        />
        <Column
          header='Eliminar'
          body={(rowData) => {
            return (<BotonEliminarUsuario data={rowData} />);
          }}
        />
      </TableComponent>
    </div>
  );
};
