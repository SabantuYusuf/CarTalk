import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home/Home';
import CarsListContainer from '../pages/CarsListContainer/CarsListContainer';
import CarContainer from '../pages/CarContainer/CarContainer';
import NewCarContainer from '../pages/NewCarContainer/NewCarContainer';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import EditCarContainer from '../pages/EditGameContainer/EditCarContainer';


export default ({ currentUser, setCurrentUser}) => (
    <Switch>
        <Route exact path='/'  component={Home} /> 

        <Route path='/cars/new' render={() => 
            currentUser
                ? <NewCarContainer />
                : <Redirect to='/login' />
        } />


        <Route exact path='/cars/:id' component={CarContainer} />

        <Route path='/cars/:id/edit' component={EditCarContainer} />

        <Route path='/cars' component={CarsListContainer} />
        
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />

        <Route path='/register' component={Register} />

    </Switch>
);


// export default (
//     <Switch>
//         <Route exact path='/'  component={Home} />
//         <Route path='/cars/new' component={NewCarContainer} />
//         <Route path='/cars/:id' component={CarContainer} />
//         <Route path='/cars' component={CarsListContainer} />
//         <Route path='/login' component={Login} />
//         <Route path='/Register' component={Register} />
        
//     </Switch>
// )