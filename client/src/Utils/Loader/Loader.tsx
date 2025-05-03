import React from 'react';

// LDRS
import { lineSpinner } from 'ldrs';
lineSpinner.register();

const Loader: React.FC = () => {
  return (
    <div className="LOADER">
      {React.createElement('l-line-spinner', {
        size: '60',
        stroke: '3',
        speed: '1',
        color: 'black',
      })}
    </div>
  );
};

export default Loader;
