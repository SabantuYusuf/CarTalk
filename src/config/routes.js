import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import CarsListContainer from '../pages/CarsListContainer/CarsListContainer';
import CarContainer from '../pages/CarContainer/CarContainer';
import NewCarContainer from '../pages/NewCarContainer/NewCarContainer';


export default (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cars/new' component={NewCarContainer} />
        <Route path='/cars/:id' component={CarContainer} />
        <Route path='/cars' component={CarsListContainer} />
        <Route path='/login' component={CarsListContainer} />
        <Route path='/Register' component={CarsListContainer} />
    </Switch>
)