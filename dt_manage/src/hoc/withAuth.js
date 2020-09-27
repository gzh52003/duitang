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
            name:'用户喜好',
            path:'/public/userlike',
            icon:<MehOutlined />
        },{
            name:'成员管理',
            path:'/public/memberlist',
            icon:<TeamOutlined />
        },{
            name:'榜单管理',
            path:'/public/listadmin',
            icon:<TableOutlined />
        }]
    }
        render(){
               console.log('auth.props',this.props)          
            if(this.props.username.authorzation){
                let menus 
                switch(this.props.username.authority){
                    case 'general_manager':
                        // menus = 
                }


              return  <InnerComponent {...this.props} menu={this.state.menus} />
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