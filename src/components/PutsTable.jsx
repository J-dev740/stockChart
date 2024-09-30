
import React from 'react';
import ProgressBar from './ProgressBar';

function PutsTable({ puts }) {
  return (
    <div className='flex flex-row gap-2 items-center justify-center'>
      <td>{puts.ltp}</td>
      <td>
        <ProgressBar value={puts.putOi} />
      </td>
      <td>{puts.oiLakh}</td>
      <td>{puts.delta}</td>
      <td>{puts.theta}</td>
      <td>{puts.vega}</td>
      <td>{puts.gamma}</td>
    </div>
  );
}

export default PutsTable;
