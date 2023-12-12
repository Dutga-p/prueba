import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DataTableComponent, Column } from '../../../../../components';
import { ToolbarRoles } from './ToolbarRoles';
import BotonEditarRoles from './BotonEditarRoles';
import { getRolesData } from '../../../../../services';

export const TablaRoles = ({data}) => {
  const [roles, setRoles] = useState([]);
  const [actualizar, setActualizar] = useState('');

  useEffect(() => {
    const getRoles = async () => {
      try {
        const resp = await getRolesData();
        setRoles(resp);
      } catch (error) {
        console.log(error);
      }
    }
    getRoles();
  }, [actualizar]);

  const [TableComponent, dt] = DataTableComponent();

  const columns = [
    { field: 'id', header: 'Id' },
    { field: 'rol', header: 'Rol' },
  ];

  return (
    <div className='bg-white rounded-md shadowContainer card p-6'>
      <ToolbarRoles dt={dt} setActualizar={setActualizar}/>

      <TableComponent columns={columns} data={roles}>
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
            return (<BotonEditarRoles data={rowData} setActualizar={setActualizar}/>);
          }}
        />
      </TableComponent>
    </div>
  );
};

TablaRoles.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};