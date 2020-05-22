import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home';
import Error from './componentes/Error';
import Carrito from './componentes/Carrito';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/carrito' component={Carrito}/>
            <Route component={Error}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
