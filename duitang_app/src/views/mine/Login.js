import React from 'react';
import '../../css/login.scss'
function Login() {
    // const { getFieldProps } = this.props.form;

    return (
        <div>
            <div className='login-close'>
                <span>你好</span>
            </div>
            <div className='login-container'>
            <h4 className='login-title'>登录堆糖</h4>
            <p className='login-renzheng'>登录即表示同意《中国移动认证服务条款》</p>
            <div className='login-phone'>
                <span>本机号码</span>
                <b>177****1964</b>
                <div className='login-phone-qita'>使用其他号码
                    <i></i>
                </div>
            </div>
                <div className="login-on-click-login">一键登录</div>
                </div>
                <div className="login-password">账号密码登录</div>
                <div class="login-other">
                    <b></b>
                    <span>其他方式登录</span>
                    <b></b>
                </div>
        </div>
    )
}



export default Login