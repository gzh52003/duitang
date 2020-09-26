import React from 'react'

export function withIsLogin(InnerComponent){
    return function outComponent(props){
        return <InnerComponent {...props} />
    }
}