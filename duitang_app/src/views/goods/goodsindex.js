import React from 'react';
import { Route, Switch } from 'react-router-dom'
import GoodsList from './goodslist'
import GoodsJs from './Goods'
import goodsDetails from './goodsDetails';

function GoodsIndex() {
    return (
        <div>
            <Switch>
                <Route path='/goods/goodslist/:id' component={GoodsList} />
                <Route path='/goods/goodsdetails/:id' component={goodsDetails} />
                <Route path='/goods' component={GoodsJs} />
            </Switch>
        </div>
    )
}
export default GoodsIndex