import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import index from './Discovery/index'
import search from './Discovery/search'
// import goodsDetails from './goodsDetails';

function GoodsIndex() {
    return (
        <div>
             <Suspense fallback={<div>loading...</div>}>  
                 <Switch>
                     {/* <Route path='/goods/goodslist/:id' component={GoodsList} /> */}
                     <Route path='/search/:id' component={search} />
                     <Route path='/discovery' component={index} />
                     {/* <Redirect from="/" to="discovery"></Redirect> */}
                 </Switch>
          </Suspense>
        </div>
    )
}
export default GoodsIndex