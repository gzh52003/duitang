import React, { useEffect } from 'react';
import {withUser,withStorage} from '../../hoc'
function Start() {
    useEffect(function(){
            console.log()
    },[])
    return (
        <div>我的页面</div>
    )
}
// Start = withUser(Start)
Start = withStorage(Start)
export default Start