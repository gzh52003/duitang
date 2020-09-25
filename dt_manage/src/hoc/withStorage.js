import React from 'react'

//获取localStorage高阶组件
export function withStorage(key) {
    let value = localStorage.getItem(key)
    try {
        value = JSON.parse(value) || {}
    } catch (err) {
        value = {}
    }
    const data = { [key]: value }
    return function (InnerComponent) {
        return function outerComponent(props) {
            return <InnerComponent {...props} {...data} />
        }
    }
}

export function withStorageClass(key) {
    let value = localStorage.getItem(key)
    try {
        value = JSON.parse(value) || {}
    } catch (err) {
        value = {}
    }
    let data = { [key]: value }
    
    return function (InnerComponent) {
        return class outerComponent extends React.PureComponent {
            render() {
                return <InnerComponent {...this.props} {...data} />
            }
        }
    }
}