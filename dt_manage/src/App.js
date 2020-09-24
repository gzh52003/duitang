import React, { Suspense, lazy } from 'react';

import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

// import { logout } from './store/actions/user'
// import { connect } from 'react-redux'
import './App.css';
// import { Row, Col, Button } from 'antd';

const Login = lazy(() => import("./views/Login"));
const Public = lazy(() => import("./Public"));
// const User = lazy(() => import("./views/User"));


class App extends React.PureComponent {
  state = {
    anniu: "名字",
    address: "/"
  }
  // // 设置名字
  // tuichu = (name) => {
  //   this.setState({
  //     anniu: name
  //   })
  // }



  // 路由跳转
  goto = (path) => {

    console.log(this.props.history, path)
    this.props.history.push(path);
    // this.props.history.push("/login")
  }

  // 路由跳转
  change = (path) => {
    this.props.match.url = "/login"
  }

  componentWillMount() {
    const { pathname } = this.props.location;
    this.setState({
      address: pathname
    })
  }

  render() {
    // const { anniu } = this.state;
    // // console.log(this.props)
    // // const { value, onIncreaseClick } = this.props
    return (
      <div style={{ height: "100vh" }}>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/public" component={Public}></Route>
            <Redirect from="/" to="/login" exact />
          </Switch>
        </Suspense>
      </div >
    );
  }
}

App = withRouter(App);

export default App;
