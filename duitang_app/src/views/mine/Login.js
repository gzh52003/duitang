import React, { useCallback } from 'react';
import '../../css/login.scss'
import { Icon } from 'antd-mobile';
function Login(props) {
    // const { getFieldProps } = this.props.form;
   const loginTuichu = useCallback(()=>{
            props.history.push('/mine/islogin')
    },[])
    return (
        <div style={{background:'#fff'}}>
            <div className='login-close'>
            <Icon type='cross' size='lg' onClick={loginTuichu}/>
            </div>
            <div className='login-container'>
            <h4 className='login-title'>登录堆糖</h4>
            <p className='login-renzheng'>登录即表示同意《中国移动认证服务条款》</p>
            <div className='login-phone'>
                <span>本机号码</span>
                <b>177****1964</b>
                <div className='login-phone-qita'>
                    <span>使用其他号码</span>
                   <Icon type='right'></Icon>
                </div>
            </div>
                <div className="login-on-click-login">一键登录</div>
                </div>
                <div className="login-password">账号密码登录</div>
                <div class="login-other">
                    <b className='login-other-left'></b>
                    <span>其他方式登录</span>
                    <b className='login-other-right'></b>
                </div>
                <div className='login-other-box'>
                    <ul className='login-other-icon'>
                        <li className='login-other-icon-item'>
                            <img src="/img/weibo.jpg"/>
                            <p>微博</p>
                        </li>
                        <li className='login-other-icon-item'>
                            <img src="/img/qq.jpg"/>
                            <p>QQ</p>
                        </li>
                        <li className='login-other-icon-item'>
                            <img src="/img/weixin.jpg"/>
                            <p>微信</p>
                        </li>
                        <li className='login-other-icon-item'>
                            <img src="/img/haiwai.jpg"/>
                            <p>海外手机</p>
                        </li>
                    </ul>
                </div>
        </div>
    )
}



export default Login