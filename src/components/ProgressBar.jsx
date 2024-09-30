import React from 'react';

function ProgressBar({ value,minOi,maxOi}) {
  const minValue = minOi;
  const maxValue = maxOi; // Placeholder for actual min/max calculations
  const progress = ((value - minValue) / (maxValue - minValue)) * 100;

  return (
    <div className="flex items-center justify-center max-w-[50px] m-2 p-2" style={{ width: `${progress}%`, backgroundColor:'red'}}>
      {value}
    </div>
  );
}

export default ProgressBar;
