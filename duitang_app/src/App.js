import React from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import { connect } from 'react-redux'


// 路由懒加载
import Home from './views/Home/Home.js'
import Discovery from './views/Discovery'
import Goods from './views/goods/Goods'
import Mine from './views/mine/Index'
import Login from './views/Login'
import Reg from './views/Reg'
import Goodindex from "./views/goods/goodsindex"
// const Discovery = lazy(()=>import('./views/Discovery'))
// const Goods = lazy(()=>import('./views/Goods'))
// const Mine = lazy(()=>import('./views/Mine'))
// const Login = lazy(()=>import('./views/Login'))
// const Reg = lazy(()=>import('./views/Reg'))


@withRouter

class App extends React.PureComponent {
  state = {
    selectedTab: '/home',
    tabbarMenu: [{
      path: '/home',
      name: 'Home',
      text: '首页',
      icon: 'icon-home',
    },
    {
      path: '/discovery',
      name: 'Discovery',
      text: '发现',
      icon: 'icon-zhinanzhen',
    },
    {
      path: '/goods',
      name: 'Goods',
      text: '值呀',
      icon: 'icon-dianzan',
    },
    {
      path: '/mine',
      name: 'Mine',
      text: '我的',
      icon: 'icon-wode',
    }],

  }
  goto=(path)=>{
    console.log(this.props);
    this.props.history.push(path); 
      this.setState({
        selectedTab: path,
      });
    
  }
  componentWillMount(){
    this.props.dispatch({type:'tabbar',show:true})
    // console.log(this.props.location.pathname,'0000');
    this.setState({
      selectedTab:this.props.location.pathname
    })
  }
  
 
  render() {
    const { hidden } = this.props
    
    return (
      <>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/discovery' component={Discovery} />
          <Route path='/mine' component={Mine} />
          <Route path='/login' component={Login} />
          <Route path="/goods" component={Goodindex} />
          <Route path='/reg' component={Reg} />
          <Route path='/notfound' render={()=><div>404</div>} />
          <Redirect from='/' to='/home' exact />
          <Redirect to='/notfound' />
        </Switch>

        <div style={{position:'fixed',bottom:0,width:"100vw"}}>
          <TabBar 
            unselectedTintColor="#949494"
            tintColor="#f25555"
            barTintColor="#fff"
            hidden={hidden}
            tabBarPosition='bottom'            
            
          >

            {
              this.state.tabbarMenu.map(item=><TabBar.Item title={item.text}
              key={item.path}
              icon={<i className={`iconfont ${item.icon}`}></i>}
              onPress={this.goto.bind(null,item.path)} 
              selected={this.state.selectedTab === item.path}
              selectedIcon={<i style={{color:'#f25555'}} className={`iconfont ${item.icon}`}></i>}
              ></TabBar.Item>)
            }
            </TabBar>
        </div>
      </>
    )
  }


  
}
const mapStateToProps = function(state){
    return {
      hidden: state.hidden,
    }
}
App = connect(mapStateToProps)(App)
export default App;



