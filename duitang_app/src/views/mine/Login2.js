import React from 'react';

function Login() {
    const { getFieldProps } = this.props.form;

    return (
        <div>
            <p>登录页面</p>
            <p>登录即表示同意《中国移动认证服务条款》</p>
            <div>
                <span>本机号码</span><input></input><div></div>
            </div>
        </div>
    )
}



export default Login