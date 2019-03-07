import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.css';
import Training from "../../page/Training";
import Translate from "../../page/Translate";
import Add from "../../page/Add";
import NotFound from "../../page/NotFound";

const Main = () => (
  <main>
      <Switch>
          <Route path='/training' component={Training}/>
          <Route path='/' exact component={Translate}/>
          <Route path='/add' component={Add}/>
          <Route component={NotFound} />
      </Switch>
  </main>
);

export  default Main;