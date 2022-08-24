import React from 'react';
import '../style/contador.css'

function contador({ numClicks }) {
  return (
    <div className='contador'>
      {numClicks}

    </div>

  );

}
export default contador;