import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'pages/default/Home';


function Router() {
    return(
        <Switch>
            <Route path="/" exact component={Home} />

            {/* <Route component={PageNotFound} /> */}
        </Switch>
    )
}

export default Router;