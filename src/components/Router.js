import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import App from './App';
import Start from './start';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Start} />
                <Route path='/:Id' component={App} />
                <Route  component={Error} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;