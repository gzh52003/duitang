import React from 'react'
import {Redirect} from 'react-router-dom'
import { UserOutlined, HomeOutlined, TableOutlined, ProfileOutlined, MehOutlined, TeamOutlined } from '@ant-design/icons';
export function withAuth(InnerComponent){
    return class outerComponent extends React.PureComponent{
        state = { menus:[{
            name:'首页',
            path:'/public/home',
            icon:<HomeOutlined />,

        },{
            submenu:[
                {name:'用户列表',
            path:'/public/userlist',
            },{
                name:'禁用列表',
                path:'/public/stoplist'
            }
            ]
        },{
            name:'内容管理',
            path:'/public/content',
            icon:<ProfileOutlined />
        },{
            name:'成员管理',
            path:'/public/memberlist',
            icon:<TeamOutlined />
        }]
    }
        render(){
               console.log('auth.props',this.props)  
               let menus         
            if(this.props.username.authorzation){
                
                switch(this.props.username.authority){
                    case '员工':
                       menus = [{
                        name:'首页',
                        path:'/public/home',
                        icon:<HomeOutlined />,
            
                    },{
                        submenu:[
                            {name:'用户列表',
                        path:'/public/userlist',
                        },{
                            name:'禁用列表',
                            path:'/public/stoplist'
                        }
                        ]
                    },{
                        name:'内容管理',
                        path:'/public/content',
                        icon:<ProfileOutlined />
                    }]
                        break
                    default:
                      menus = [{
                        name:'首页',
                        path:'/public/home',
                        icon:<HomeOutlined />,
            
                    },{
                        submenu:[
                            {name:'用户列表',
                        path:'/public/userlist',
                        },{
                            name:'禁用列表',
                            path:'/public/stoplist'
                        }
                        ]
                    },{
                        name:'内容管理',
                        path:'/public/content',
                        icon:<ProfileOutlined />
                    },{
                        name:'成员管理',
                        path:'/public/memberlist',
                        icon:<TeamOutlined />
                    }]
                }


              return  <InnerComponent {...this.props} menu={menus} />
            }else{
                console.log('重定向',)
                // this.goto('/login')
                // 
                return <Redirect from="/" to="/login" />
            }

            // return (<i>未登录静止访问</i>)
        }
    }
  
}