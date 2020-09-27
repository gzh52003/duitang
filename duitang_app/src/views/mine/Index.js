import React, { useEffect,useState,useHistory, useCallback} from 'react';
import { Redirect, withRouter ,Switch,Route} from 'react-router-dom';
import {withUser,withStorage} from '../../hoc'
import { NavBar, Checkbox, Button } from 'antd-mobile';

import IsLogin from './IsLogin'
import Login from './Login'
import SetUp from './setUp'
// console.log(Login2,'mine')
function Start(props) {
   const [headerShow,setHeaderShow] = useState('none')
   const [boxId, setBoxId] = useState(0);//使用useState存入变量boxid
    // const [AA, setAA] = useState(false);
    const goto = useCallback((path)=>{
        props.history.push(path)
    },[])
    useEffect(()=>{
        console.log('切换')
        let path = props.location.pathname
        switch(path){
            case '/mine/islogin':
                setHeaderShow('flex')
                // console.log(path,'执行')
                break
            default:
                setHeaderShow('none')
        }
        return ()=>{}
    },[props.location.pathname])
    useEffect(function fn(){
        const data = true
            console.log(props,'mine')
            let path = props.username.username
            if(!path){
                goto('/mine/mymine')
            }else{
                goto('/mine/islogin')
            }
            
            // props.location.pathname === '/mine/login' ?setHeaderShow(true):''
          return ()=>{
              console.log('销毁')
          }
    },[])
    //设置按钮
    const goSetUp = useCallback(()=>{
        console.log('你好')
        props.history.push('/mine/setup')
    },[])
    // const falg;
    // const tuichu = () => {
    //     console.log("asdsd")
    // }
    // function handleClick() {
    //     useHistory.push("/login2");
    // }
    // setAA(true)
    return (
        <>
         <NavBar
                mode="dark"
                style={{ background: "#f5f5f9" ,display:headerShow}}
                rightContent={[
                    <i className={"iconfont  icon-shezhi"} style={{ color: "#222", fontSize: "18px" }} onClick={goSetUp}></i>
                    // <Icon key="1" type="ellipsis" onClick={tuichu.bind()} />,
                ]}
            ></NavBar>
         <Switch>
          <Route path='/mine/login' component={Login} />
          <Route path='/mine/islogin' component={IsLogin} />
          <Route path='/mine/setup' component={SetUp} />
          {/* <Route path='/login' component={Login} />
          <Route path="/goods" component={Goodindex} />
          <Route path='/reg' component={Reg} />
          <Route path='/notfound' render={()=><div>404</div>} />
          <Redirect from='/' to='/home' exact />
          <Redirect to='/notfound' /> */}
        </Switch>
    
        </>
    )
}
// Start = withUser(Start)
Start = withStorage('username')(Start)
// Start = withMine(Start)
Start = withRouter(Start)
export default Start