
import React from 'react';
import { connect } from 'react-redux';

const ADD_GUN = 'addGun'
const REMOVE_GUN = 'removeGun'

//store
export function counter(state = 0, action) {
    //当action被调用执行后，会到此处进行判断，执行状态的变化
    switch (action.type) {
        case 'addGun':
            return state + 1
        case 'removeGun':
            return state - 1
        default:
            return 10
    }
}

//action
export function addGun() {
    return { type: ADD_GUN }
}
export function removeGun() {
    return { type: REMOVE_GUN }
}
export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000)
    }
}