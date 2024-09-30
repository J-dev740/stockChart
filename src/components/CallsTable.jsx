import React from 'react';
import ProgressBar from './ProgressBar';

function CallsTable({ calls,minOi,maxOi }) {
  return (
   <>
      <td className='flex w-fit overflow-x-scroll justify-center items-center'>{calls.gamma}</td>
      <td className='flex w-fit overflow-x-scroll justify-center items-center'>{calls.vega}</td>
      <td className='flex w-fit overflow-x-scroll justify-center items-center'>{calls.theta}</td>
      <td className='flex w-fit overflow-x-scroll justify-center items-center'>{calls.delta}</td>
      <td className='flex w-fit overflow-x-scroll justify-center items-center'>{calls.oiLakh}</td>
      <td className='flex  w-fit overflow-x-scroll justify-center items-center '>
        {/* <ProgressBar min={minOi} max={maxOi} value={calls.callOi} /> */}
        progresss
      </td>
      <td className='flex w-[200px] overflow-x-scroll justify-center items-center'>{calls.ltp}</td>
    </>
  );
}

export default CallsTable;
