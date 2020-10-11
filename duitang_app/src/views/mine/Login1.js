import React, { useEffect, useState } from 'react';
import { NavBar, Checkbox, Button, Toast } from 'antd-mobile';



function Login(props) {
    // let a = useState(1)
    // let num = true;
    // let []

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
    // })
    const tuichu = () => {
        console.log("asdsd")
    }

    // setAA(true)

    return (
        <div >
            <NavBar
                mode="dark"
                style={{ background: "#f5f5f9" }}
                rightContent={[
                    <i className={"iconfont  icon-shezhi"} onClick={() => tuichu} style={{ color: "#222", fontSize: "18px" }}></i>
                    // <Icon key="1" type="ellipsis" onClick={tuichu.bind()} />,
                ]}
            ></NavBar>

            <div style={{ paddingTop: "20%", width: "20%", margin: "0 auto" }}>
                <img src="/logo.png" alt="" />
            </div>
            <div style={{ paddingTop: "3%", textAlign: "center", fontSize: "14x", color: "#888" }}>
                <p>轻松注册，即可永久保存你的所爱</p>
                <p>换了手机也能找得到哦</p>
            </div>
            <div style={{ paddingTop: "50px" }}>
                <Button style={{ width: "56%", borderRadius: "50px", margin: "0 auto" }} type="warning" onClick={() => handleClick()}>开始堆糖</Button>
            </div>
            <div style={{ margin: "0 auto", width: "80%", textAlign: "center", paddingTop: "3%" }}>
                <Checkbox style={{ display: "inline-block" }} className="checking">
                </Checkbox>
                <p style={{ display: "inline-block" }}>同意<span>《堆糖用户协议》</span>和<span>《隐私政策》</span></p>
            </div>
        </div>
    )
}
export default Login