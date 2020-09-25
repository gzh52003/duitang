import React,{useEffect, useState,useCallback} from 'react';
import { Table, Button,Space,Popconfirm } from 'antd';
import "../css/Content.css"
import request from '../utils/request'
import { CheckOutlined,DeleteOutlined } from '@ant-design/icons';


function Content(props) {
    const [data,setData] = useState([])
    // console.log('home.props=', props)

    // 数据审核通过
    const shujuok = useCallback(function(event){
        console.log('数据审核通过',event.currentTarget.parentElement.parentElement.parentElement.parentElement.firstElementChild.innerHTML)

    })

    // 删除数据
    const deleteshuju = useCallback(function(event){
        console.log('删除数据',event.currentTarget.parentElement.parentElement.parentElement.parentElement.firstElementChild.innerHTML)
    })

    // 请求数据
    useEffect( async ()=>{
        const {data} = await request.get('/list/by_search',{page:1,size:10})
        data.map((item)=>{
          item.username = item.sender.username;
          item.content = item.album.name
        })
        setData(data)
        
    },[])


    
const columns = [
    {
        title: '用户名id',
        dataIndex: 'id',
        key: 'id',
        
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        
    },
    {
        title: '发布内容',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: '发布时间',
        dataIndex: 'add_datetime',
        key: 'add_datetime',
    },
    {
        title: '浏览记录',
        dataIndex: 'favorite_count',
        key: 'favorite_count',
        sorter: (a, b) => a.favorite_count - b.favorite_count,
    },
    {
        title: '点赞人数',
        dataIndex: 'like_count',
        key: 'like_count',
        sorter: (a, b) => a.like_count - b.like_count,
    },
    {
        title: '内容审核',
        key: 'action',
        render: (text) => (
          <Space size="middle">
            <Button type="defalut" className="ok" shape="circle" icon={<CheckOutlined />}  size='middle' onClick={shujuok}/>
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                <Button type="defalut" className="delete" shape="circle" icon={<DeleteOutlined />}  size='middle' danger onClick={deleteshuju}/>
            </Popconfirm>
          </Space>
        ),
    }
]
    return (
        <div style={{}}>
            <>
                <Table columns={columns} dataSource={data} pagination={{
                    // showSizeChanger,
                    // onShowSizeChange,
                    // showQuickJumper
                    //  showTotal: total

                }}>
                    {/* <Pagination
                total={85}
                defaultPageSize="5"
                  } */}
                    {/* /> */}
                </Table>

            </>,
        </div >
    )
}


export default Content;