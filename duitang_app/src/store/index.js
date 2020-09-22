import {createStore} from 'redux';

const initState = {
    hidden:false,
}

const reducer = function(state=initState,action){
    console.log(state);
    switch(action.type){
        case 'tabbar':
            return {
                hidden:action.show
            }
           
        default :
        return state
    } 
}

const store = createStore(reducer);

export default store;