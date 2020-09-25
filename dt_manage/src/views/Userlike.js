import React,{userState,useEffect} from 'react';
import { Table, Button } from 'antd';

import request from '../utils/request'


const columns = [
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        render: text => <span>{text}</span>,
    },
    {
        title: '发布内容',
        dataIndex: 'phone',
        key: 'phone',
        // ellipsis: true,
        className: "content_row",
        rend: text => {
            return (
                <p>{text}</p>
            )
        }
    },
    {
        title: '发布时间',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: '浏览记录',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '点赞人数',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'tags',
        dataIndex: 'tags',
        render: text => <> {
            text.map(ind => {
                if (ind === "nice") {
                    return (

                        <Button key={ind + 1} type="primary" danger>{ind}</Button>
                        // <Button key={ind + 1} onClick={}>{ind}</Button>
                    )
                } else {
                    return (
                        <Button key={ind + 1} style={{ background: "#58bc58" }}>{ind}</Button>
                    )
                }
            })
        }
        </>
    }
]

const showQuickJumper = () => {
    console.log("asd")
}

const onShowSizeChange = (current, size) => {
    console.log(current, size)
}

const showSizeChanger = () => {

}

function Userlike(props) {
    // const [data,setData] = userState([{}])

    console.log('home.props=', props)


    return (
        <div style={{}}>
            <>
                {/* <Table columns={columns} dataSource={data} pagination={{
                    showSizeChanger,
                    onShowSizeChange,
                    showQuickJumper
                    //  showTotal: total

                }}>

                </Table> */}

            </>,
        </div >
    )
}


export default Userlike;