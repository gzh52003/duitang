import React from 'react'
import {Redirect} from 'react-router-dom'
export function withAuth(InnerComponent){
    return class outerComponent extends React.PureComponent{
      
        render(){
               console.log('auth.props',this.props)          
            if(true){
              return  <InnerComponent {...this.props} menu={{menu:'世界'}} />
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