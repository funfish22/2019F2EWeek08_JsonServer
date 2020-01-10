import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'pages/default/Home';
import Folder from 'pages/default/Folder';


function Router() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Folder/:name" component={Folder} />

            {/* <Route component={PageNotFound} /> */}
        </Switch>
    )
}

export default Router;