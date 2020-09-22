import React  from 'react';
import { Route, Switch } from 'react-router-dom'
import GoodsList from './goodslist'
import Goods from './Goods'

function GoodsIndex(){
    return  (
        <div>
            <Switch>
                <Route path='/goods/goodslist/:id' component={GoodsList} />
                <Route path='/goods' component={Goods} />
            </Switch>
        </div>
    )
}
export default GoodsIndex