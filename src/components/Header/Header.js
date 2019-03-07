import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Routes from '../../routes';
import Headroom from 'react-headroom'

class Header extends Component {
    render() {
        return (
          <Headroom>
            <header>
                {Routes.map((routes)=>{
                    return(
                        <NavLink key={routes.path} activeClassName='active' to={routes.path} exact={true}>{routes.name}</NavLink>
                    )
                })}
            </header>
          </Headroom>
        );
    }
}

export default Header;