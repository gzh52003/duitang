import './App.css';
import React, { Suspense, lazy } from 'react';

import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { Row, Col, Button, Menu, Layout } from 'antd';
import { UserOutlined, HomeOutlined, TableOutlined, ProfileOutlined, MehOutlined, TeamOutlined } from '@ant-design/icons';
import { withStorageClass, withAuth } from './hoc'

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

// import { logout } from './store/actions/user'
// import { connect } from 'react-redux'




const Home = lazy(() => import("./views/Home"));
const Stoplist = lazy(() => import("./views/Stoplist"));
const Userlist = lazy(() => import("./views/Userlist"));
const ContentJS = lazy(() => import("./views/Content"));
const Userlike = lazy(() => import("./views/Userlike"));
const Memberlist = lazy(() => import("./views/Memberlist"));
const Listadmin = lazy(() => import("./views/Listadmin"));


class Public extends React.PureComponent {
    state = {
        address: "/",
        openKeys: ['sub1'],
        name: "",
    }

    // 路由跳转
    goto = (path) => {
        // console.log(this.props.history, path)
        this.props.history.push(path);
    }


    tuichu = () => {
        this.props.history.push("/login");
    }

    // // 路由跳转
    // change = (path) => {
    //     console.log(this.props.match, path)
    //     this.props.match.url = "/login"
    // }

    componentWillMount() {
        // console.log(localStorage.getItem("wuhu"))
        const { pathname } = this.props.location;
        let names = "";
        if (this.props.location.state) {
            names = this.props.location.state.name;
        } else {
            names = localStorage.getItem("name")
        }
        // this.state.name = names
        // console.log(names)
        this.setState({
            address: pathname,
            name: names
        })

    }
    componentWillUnmount() {
        console.log(this.state.name)
        // console.log(localStorage.getItem("wuhu"))

    }


    // 左边的菜单栏
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];



    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };


    render() {
        // console.log(this.state, this.props.location.state.name)
        localStorage.setItem("name", this.state.name)
        return (
            <div style={{ height: "100vh" }}>
                < Row style={{ backgroundColor: "#58bc58", height: "60px", lineHeight: "60px" }} >
                    <Col span={12}>
                        <h1 style={{ position: "absolute", left: "-999px" }}>堆糖后台管理系统</h1>
                        <span style={{ fontSize: "38px", color: "skyblue", padding: "0 0 0 10% " }}>堆糖后台管理系统</span>
                    </Col>
                    <Col span={12}>
                        <div style={{ float: "right", padding: "0 10% 0 0 " }} >
                            <span style={{ cursor: "pointer", color: "pink", fontSize: "20px", margin: "0 10px" }}>{this.state.name}</span>
                            <Button onClick={this.tuichu.bind(this)} style={{}}>
                                退出
                        </Button>
                        </div>
                    </Col>

                </Row >
                <Row style={{ height: "calc(100vh - 60px) " }} >
                    <Col span={4} style={{ backgroundColor: "#58bc58", height: "100%" }}>
                        {/* 左边菜单 */}
                        <Menu
                            mode="inline"
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                            style={{ width: "100%", border: "none", background: "#58bc58", fontSize: "20px" }}
                        >

                            <Menu.Item key="sub1" icon={<HomeOutlined />} style={{ margin: "0", background: "#58bc58" }} onClick={this.goto.bind(this, "/public/home")}>首页</Menu.Item>
                            <SubMenu key="sub2" icon={<UserOutlined />} title="用户管理" style={{ width: "100%" }}>
                                <Menu.Item key="5" style={{ margin: "0", background: "#58bc58" }} onClick={this.goto.bind(this, "/public/userlist")}>用户列表</Menu.Item>
                                <Menu.Item key="6" style={{ margin: "0", background: "#58bc58" }} onClick={this.goto.bind(this, "/public/stoplist")}>禁用列表</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="sub3" icon={<ProfileOutlined />} title="内容管理" onClick={this.goto.bind(this, "/public/content")}>内容管理
                            </Menu.Item>
                            <Menu.Item key="sub4" icon={<MehOutlined />} title="用户喜好" onClick={this.goto.bind(this, "/public/userlike")}>用户喜好
                            </Menu.Item>
                            <Menu.Item key="sub5" icon={<TeamOutlined />} title="成员管理" onClick={this.goto.bind(this, "/public/memberlist")}>成员管理
                            </Menu.Item>
                            <Menu.Item key="sub6" icon={<TableOutlined />} title="榜单管理" onClick={this.goto.bind(this, "/public/listadmin")}>榜单管理
                            </Menu.Item>
                        </Menu>

                    </Col>
                    <Col span={20} style={{ backgroundColor: "#666", overflowY: "scroll", height: "calc(100vh - 60px)" }}>
                        <Suspense fallback={<div>loading...</div>}>
                            <Switch>
                                <Route path="/public/home" component={Home}></Route>
                                <Route path="/public/userlist" component={Userlist}></Route>
                                <Route path="/public/stoplist" component={Stoplist}></Route>
                                <Route path="/public/content" component={ContentJS}></Route>
                                <Route path="/public/userlike" component={Userlike}></Route>
                                <Route path="/public/memberlist" component={Memberlist}></Route>
                                <Route path="/public/listadmin" component={Listadmin}></Route>
                                <Redirect from="/public" to="/public/home" exact />
                            </Switch>
                        </Suspense>
                    </Col>

                </Row>


            </div >
        );
    }

}
Public = withAuth(Public);
Public = withStorageClass('username')(Public);
Public = withRouter(Public);


export default Public;
