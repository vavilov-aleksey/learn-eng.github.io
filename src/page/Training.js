import React from 'react';
import {localStorageKey} from '../data';

const Training = () => {
  const Data = JSON.parse(localStorage.getItem(localStorageKey));

  const shuffle = (array) => {
    if (array) {
      let cacheLength = array.length;

      for (let i = cacheLength - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  };

  shuffle(Data);

  return(
    <div className='translate'>
      <ul>
        {Data && Data.map((el, id)=>{
          return(
            <li key={id} title=''>
              {el.eng}
              <span>{el.rus}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Training;
