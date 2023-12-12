import React, { useRef } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const DataTableComponent = () => {
  const dt = useRef(null);

  const TableComponent = ({
    children,
    data,
    rulesDefault = {
      'rowsDefault': 10,
      'rowsOptions': [5, 10, 25, 50],
      'sortable': true,
    }
  }) => {
    return (
      <DataTable
        ref={dt}
        value={data}
        sortMode="multiple"
        removableSort
        showGridlines
        paginator
        rows={rulesDefault.rowsDefault}
        rowsPerPageOptions={rulesDefault.rowsOptions}
        tableStyle={{ minWidth: '100%' }}
        className='font-inter'
      >
        {children}
      </DataTable>
    );
  };

  return [TableComponent, dt];
};

export { DataTableComponent, Column };
