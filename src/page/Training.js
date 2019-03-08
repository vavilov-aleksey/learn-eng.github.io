import React, { Component } from 'react';
import {localStorageKey} from '../data';

export default class Training extends Component {
  render() {
    const Data = JSON.parse(localStorage.getItem(localStorageKey));

    return (
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
    );
  }
}
