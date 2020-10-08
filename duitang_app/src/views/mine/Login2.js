import React from 'react';
import { Button } from 'antd-mobile';

function Login() {
    // const { getFieldProps } = this.props.form;

    return (
        <div style={{ background: "#fff", height: "100vh" }}>
            <div style={{ padding: "10% 5% 0" }}>
                <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "4%" }}>登录堆糖</p>
                <p style={{ color: "#aaa" }}>登录即表示同意《中国移动认证服务条款》</p>
            </div>
            <div style={{ padding: "0  5% ", marginTop: "20px" }}>
                <span>本机号码</span>
                <input style={{ border: "none" }} maxLength={11}></input>
                <Button style={{ display: "inline-block", color: "#f02", border: "#f02 solid 1px" }} size="small" >使用其他号码 &gt;</Button>
                <div>

                </div>
            </div>
        </div>
    )
}



export default Login