import React from 'react'

export function withStorage(key){
    let storageValue = localStorage.getItem(key)
    try{
        storageValue = JSON.parse(storageValue) || {}
    }catch(err){
        storageValue = {}
    }
    let obj = {
        [key] : storageValue
    }
    return function(InnerComponent){
        return function(props){
            return <InnerComponent {...props} {...obj} />
        }
    }
}

export default withStorage