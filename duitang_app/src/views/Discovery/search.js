import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Search1 from "./search1";
import Search2 from "./search2";

function Login() {


    return (
        <div>
            <Switch>
                <Route path='/discovery/search/index' component={Search1} />
                <Route path='/discovery/search/list/:id' component={Search2} />
                <Redirect from="/discovery/search" to="/discovery/search/index" exact></Redirect>
                {/* <Route path='/discovery/list/:id' component={index} /> */}
            </Switch>
        </div>
    )
}
export default Login