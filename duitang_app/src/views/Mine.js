import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'


// import Mineindex from "./mine/Index";

// import Login1 from "./mine/Login1";
// import Login2 from "./mine/Login2";

function Mine() {
    const Mineindex = lazy(() => import("./mine/Index"))
    const Login1 = lazy(() => import("./mine/Login1"))
    const Login2 = lazy(() => import("./mine/Login2"))
    return (
        <div className="content">
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    <Route path="/mine/index" component={Mineindex}></Route>
                    <Route path="/mine/login1" component={Login1}></Route>
                    <Route path="/mine/login2" component={Login2}></Route>
                    {/* <Route path="" component={}></Route> */}
                    <Redirect from="/mine" to="/mine/login1"></Redirect>
                </Switch>
            </Suspense>
        </div>
    )
}

// Mine = withRouter(Mine)

export default Mine






