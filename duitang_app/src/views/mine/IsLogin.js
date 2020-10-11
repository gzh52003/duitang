import React, { useCallback, useEffect, useState } from 'react';
import { NavBar, Checkbox, Button } from 'antd-mobile';

import { useHistory } from "react-router-dom";
import {Toast} from 'antd-mobile'


const tuichu = () => {
    console.log("asdsd")
}


function Login(props) {
    // let a = useState(1)
    // let num = true;
    // let []
    // const [AA, setAA] = useState(false);
    // function handleClick() {
    //     useHistory.push("/login2");
    // }
    const startClick = useCallback(()=>{
        let checked = document.querySelector('.start-checked .am-checkbox-input').checked
        if(checked){
           props.history.push('/mine/login')
        console.log(props,'isogin')
        }else{
            Toast.info('堆糖：请先勾选同意用户协议和隐私政策')
        }
    },[])
    useEffect(() => {

    const handleClick = () => {
        let aa = document.querySelector(".checking input").checked;
        // console.log(aa)
        if (aa) {
            props.history.push("/mine/login2")
        } else {
            Toast.info('请先勾选同意用户协议和隐私政策', 1.5);
        }

    }
    // useEffect(() => {

    // num = !num;
    // console.log(num)
    // if (num) {
    //     // console.log("Asd")
    // }
    // const fff = () => {


        // }
    },[])

    // }
    // })
    const tuichu = () => {
        console.log("asdsd")
    }

    // setAA(true)

    return (
        <div >
         

            <div style={{ paddingTop: "20%", width: "20%", margin: "0 auto" }}>
                <img src="/logo.png" alt="" />
            </div>
            <div style={{ paddingTop: "3%", textAlign: "center", fontSize: "14x", color: "#888" }}>
                <p>轻松注册，即可永久保存你的所爱</p>
                <p>换了手机也能找得到哦</p>
            </div>
            <div style={{ paddingTop: "50px" }}>
                <Button style={{ width: "56%", borderRadius: "50px", margin: "0 auto" }} type="warning" onClick={startClick}>开始堆糖</Button>
            </div>
            <div style={{ margin: "0 auto", width: "80%", textAlign: "center", paddingTop: "3%" }}>
                <Checkbox style={{ display: "inline-block" }} disabled={false} className='start-checked'>
                </Checkbox>
                <p style={{ display: "inline-block" }}>同意<span>《堆糖用户协议》</span>和<span>《隐私政策》</span></p>
            </div>
        </div>
    )
}
export default Login