import React from 'react';
import request from "../../utils/request"
function Login() {

    request.get("/list/by_search", {
        kw: "动漫"
    }).then(res => {
        console.log(res)
    })
    return (
        <div>
            search1
        </div>
    )
}
export default Login