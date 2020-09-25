import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import request from '../utils/request'
import { DownOutlined } from '@ant-design/icons';
import { Table, Button, Menu, Dropdown, Calendar, Pagination, InputNumber, Input, message, Select } from 'antd';
const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select


function User() {
    let throttle = null
   
    // const [throttle, setThrottle] = useState(null)
    const [data, setData] = useState([])

    let [total, setTotal] = useState(1)

    //发起请求
    useEffect(async () => {
        const { data } = await request.get('/user/batch', { is: 'false' })
        setData(data.data)
        setTotal(data.tal)
        return
    }, [])
    //禁用时间函数
    const onPanelChange = useCallback(async function (value, evt) {

        if (value <= 0) { message.error('只能为正整数'); return }
        message.success('禁用成功');
        let time = new Date().setHours(value)
        const id = evt.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.innerText
        await request.get('/user/disable', { id, operation: true, disable_time: time })
        showSizeChanger()

    }, [])


    //下一页上一页
    const showSizeChanger = useCallback(async function (page, size) {
        const tabAjax = document.querySelector('.user-search .ant-input').value
           
        if(tabAjax){
            let  msg = document.querySelector('.user-list-select .ant-select-selection-item').innerText
            searchAjax(msg,tabAjax,page,size)
        }else{

           let data= await request.get('/user/batch', { page, size, is: false })
            setData(data.data.data)
            setTotal(data.data.tal)
        }
    }, [])

    const search = useCallback(async function (value, evt) {
        if (throttle) return

        let inputValue
        if (!evt) {
            inputValue = value.target.value

        } else {
            inputValue = value
        }
        //内容为空调用初始请求
        
        throttle = setTimeout(() => {
            if (!inputValue) {
                showSizeChanger(1, 5)
                return
            }
            throttle = null
           let  msg = document.querySelector('.user-list-select .ant-select-selection-item').innerText
           
            searchAjax(msg, inputValue,)

        }, 1000)
    }, [])
    //搜索请求
    const searchAjax = useCallback(async (key, kw,page,size) => {
        switch (key) {
            case '用户名':
                key = 'username'
                break
            case '地区':
                key = 'region'
                break
            case '手机号':
                key = 'phone'
                break
        }
        const { data, total } = await request.get('/user/search', {
            key, kw,is:false,page,size
        })
        if (!data) return
        setData(data.filter(item => !item.is_disable))
        setTotal(total)
    }, [])
    //表格title
    const columns = [
        {
            title: '用户id',
            dataIndex: 'id',
            key: 'id',

        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            render: text => <span>{text}</span>,
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',

        },
        {
            title: '生日',
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: '地区',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: '设置禁用时间',
            key: 'is_disable',
            dataIndex: 'is_disable',
            render: text => {


                return (
                    <>

                        <Search
                            placeholder="/天"
                            onSearch={onPanelChange}
                            type='number'
                            enterButton={'确定'}
                            size='small'
                            style={{ fontSize: '10px', width: 100 }}
                        // onPressEnter={onPanelChange}

                        />
                    </>
                )

            }


        }
    ]



    return <div style={{}}>
        <>
            <div>
                <Input.Group compact style={{ margin: '5px 0px' }} className='user-search'>
                    <Select defaultValue="用户名" className='user-list-select'>
                        <Option value="用户名">用户名</Option>
                        <Option value="手机号">手机号</Option>
                        <Option value="地区">地区</Option>
                    </Select>
                    <Input.Search
                        style={{ width: '30%' }}
                        defaultValue=""
                        onChange={search}
                        onPressEnter={search}
                        onSearch={search} />
                </Input.Group>
            </div>
            <Table columns={columns} dataSource={data} pagination={false
              
            }>

            </Table>
            <Pagination
                style={{ textAlign: 'center', marginTop: '5px' }}
                total={total}
                defaultPageSize="5"
                onChange={showSizeChanger}
                pageSizeOptions={[5, 10, 15, 20]}

            />
        </>,
    </div >
}




export default User;