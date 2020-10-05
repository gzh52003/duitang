import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from './Discovery/index'
import Search from './Discovery/search'
// import goodsDetails from './goodsDetails';

function GoodsIndex() {
    return (
        <div>
            {/* <Suspense> */}
            <Switch>
                <Route path='/discovery/search' component={Search} />
                <Route path='/discovery/home' component={Index} />
                <Redirect from="/discovery" to="/discovery/home" exact></Redirect>
                {/* <Route path='/discovery/list/:id' component={index} /> */}
            </Switch>
            {/* </Suspense> */}
        </div>
    )
}
export default GoodsIndex