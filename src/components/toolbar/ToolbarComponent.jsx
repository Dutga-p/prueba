import React from 'react';
import { Toolbar } from 'primereact/toolbar';

export const ToolbarComponent = ({ startContent, endContent }) => {
  return (
    <div className='card'>
      <Toolbar start={startContent} end={endContent} />
    </div>
  );
};
