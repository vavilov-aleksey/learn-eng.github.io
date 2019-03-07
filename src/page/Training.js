import React, { Component } from 'react';

export default class Training extends Component {
  render() {
    const Data = JSON.parse(localStorage.getItem('learnEng'));

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
