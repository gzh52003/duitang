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
// const Userlike = lazy(() => import("./views/Userlike"));
const Memberlist = lazy(() => import("./views/Memberlist"));
// const Listadmin = lazy(() => import("./views/Listadmin"));


class Public extends React.PureComponent {
    state = {
        address: "/",
        openKeys: ['sub1'],
        name: "",
    }

    // 路由跳转
    goto = (path) => {
        this.props.history.push(path);
    }


    tuichu = () => {
        this.props.history.replace("/login");
        localStorage.removeItem('username')
    }

    // // 路由跳转
    // change = (path) => {
    //     this.props.match.url = "/login"
    // }

    componentWillMount() {
        const { pathname } = this.props.location;
        let names = "";
        if (this.props.location.state) {
            names = this.props.location.state.name;
        } else {
            names = localStorage.getItem("name")
        }
        // this.state.name = names
        this.setState({
            address: pathname,
            name: names
        })
        console.log('public路由守卫',this.state)

    }
    componentWillUnmount() {

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
        localStorage.setItem("name", this.state.name)
        return (
            <div style={{ height: "100vh" }}>
                 <Layout>
                        <Header style={{backgroundColor:'#888'}}>  
                            < Row  >
                                <Col span={12}>
                                    <h1 style={{ fontSize: "38px", color: "#fff", }}>堆糖后台管理系统</h1>
                                    {/* <span style={{ fontSize: "38px", color: "#fff", padding: "0 0 0 10% " }}>堆糖后台管理系统</span> */}
                                </Col>
                                <Col span={12}>
                                    <div style={{ float: "right", padding: "0 10% 0 0 " }} >
                                        <span style={{ cursor: "pointer", fontSize: "20px", margin: "0 10px" }}>
                                            <span>欢迎您！</span><i style={{color:"skyblue",fontStyle:'normal'}}>{this.state.name}</i></span>
                                        <Button onClick={this.tuichu.bind(this)} style={{}}>
                                            退出
                                    </Button>
                                    </div>
                                </Col>

                            </Row >
                            
                        </Header>
                 <Layout>
                                <Sider theme='light'>
                                     <Menu
                                        mode="inline"
                                        openKeys={this.state.openKeys}
                                        onOpenChange={this.onOpenChange}
                                        style={{ width: "100%", border: "none", fontSize: "20px" }}
                                    >
{/* 
                                        <Menu.Item key="sub1" icon={} style={{ margin: "0", }} onClick={this.goto.bind(this, "")}>首页</Menu.Item>
                                        <SubMenu key="sub2" icon={<UserOutlined />} title="用户管理" style={{ width: "100%" }}>
                                            <Menu.Item key="5" style={{ margin: "0", }} onClick={this.goto.bind(this, "/public/userlist")}>用户列表</Menu.Item>
                                            <Menu.Item key="6" style={{ margin: "0", }} onClick={this.goto.bind(this, "/public/stoplist")}>禁用列表</Menu.Item>
                                        </SubMenu>
                                        <Menu.Item key="sub3" icon={<ProfileOutlined />} title="内容管理" onClick={this.goto.bind(this, "/public/content")}>内容管理
                                        </Menu.Item>
                                        <Menu.Item key="sub4" icon={<MehOutlined />} title="用户喜好" onClick={this.goto.bind(this, "/public/userlike")}>用户喜好
                                        </Menu.Item>
                                        <Menu.Item key="sub5" icon={<TeamOutlined />} title="成员管理" onClick={this.goto.bind(this, "/public/memberlist")}>成员管理
                                        </Menu.Item>
                                        <Menu.Item key="sub6" icon={<TableOutlined />} title="榜单管理" onClick={this.goto.bind(this, "/public/listadmin")}>榜单管理
                                        </Menu.Item> */}
                                        {
                                            this.props.menu.map(item=>{
                                                if(item.submenu){
                                                   return (<SubMenu key="sub2" icon={<UserOutlined />} title="用户管理" style={{ width: "100%" }}>
                                                    {item.submenu.map(sub=>(
                                                        <Menu.Item key={super.path} style={{ margin: "0", }} onClick={this.goto.bind(this, sub.path)}>{sub.name}</Menu.Item>
                                                    ))}
                                                    
                                                </SubMenu>)
                                                }else{
                                                    return (
                                                        <Menu.Item key={item.path} icon={item.icon} title={item.name} onClick={this.goto.bind(this,item.path)}>{item.name}
                                                        </Menu.Item>
                                                    )
                                                }
                                            })
                                        }
                                    </Menu>
                                </Sider>
                                <Content style={{padding:'10px',height:'calc(100vh - 64px )'}}>
                                 <Suspense fallback={<div>loading...</div>}>
                                    <Switch>
                                        <Route path="/public/home" component={Home}></Route>
                                        <Route path="/public/userlist" component={Userlist}></Route>
                                        <Route path="/public/stoplist" component={Stoplist}></Route>
                                        <Route path="/public/content" component={ContentJS}></Route>
                                        {/* <Route path="/public/userlike" component={Userlike}></Route> */}
                                        <Route path="/public/memberlist" component={Memberlist}></Route>
                                        {/* <Route path="/public/listadmin" component={Listadmin}></Route> */}
                                        <Redirect from="/public" to="/public/home" exact />
                                    </Switch>
                                </Suspense>
                                </Content>
                            </Layout>
                    </Layout>


            </div >
        );
    }

}
Public = withAuth(Public);
Public = withStorageClass('username')(Public);
Public = withRouter(Public);


export default Public;
