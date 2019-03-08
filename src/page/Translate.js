import React, {Component} from 'react';
import '../style/page/translate.css';
import {localStorageKey} from "../data";


export default class Translate extends Component {
  render() {
    const Data = JSON.parse(localStorage.getItem(localStorageKey));

    return (
      <div className='translate'>
        <ul>
          {Data && Data.map((el, id)=>{
            return(
              <li key={id}>{el.eng} - {el.rus}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}
