import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import request from '../utils/request'

const columns = [
    {
        title: '用户名',
        dataIndex: 'username',
        key: '_id',

    },
    {
        title: '图片',
        dataIndex: 'photo',
        key: '_id',
        // ellipsis: true,
        className: "content_row",
        // rend: text => {
        //     return (
        //         <p>{text}</p>
        //     )
        // }
    },
    {
        title: '喜欢方向',
        dataIndex: 'name',
        key: '_id',

    },
    // {
    //     title: '浏览记录',
    //     dataIndex: 'address',
    //     key: 'address',
    // },
    // {
    //     title: '点赞人数',
    //     dataIndex: 'address',
    //     key: 'address',
    // },
    // {
    //     title: '操作',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     // render: text => <> {
    //     //     text.map(ind => {
    //     //         if (ind === "nice") {
    //     //             return (

    //     //                 <Button key={ind + 1} type="primary" danger>{ind}</Button>
    //     //                 // <Button key={ind + 1} onClick={}>{ind}</Button>
    //     //             )
    //     //         } else {
    //     //             return (
    //     //                 <Button key={ind + 1} style={{ background: "#58bc58" }}>{ind}</Button>
    //     //             )
    //     //         }
    //     //     })
    //     // }
    //     // </>
    // }
]

const showQuickJumper = () => {
    console.log("asd")
}

const onShowSizeChange = (current, size) => {
    console.log(current, size)
}

const showSizeChanger = () => {

}

function Userlike() {
    // console.log('home.props=', props)
    let [data, setdata] = useState([]);

    useEffect(() => {
        if (data.length !== 0) return;
        request.get("/list/by_search", {
            params: {}
        }).then((res) => {
            res.data.map((item) => {
                item.username = item.sender.username
                item.photo = item.photo.path
                item.name = item.album.name
            })
            // console.log(res.data)
            setdata(data = res.data)
        })


    })
    console.log(data)

    return (

        < div style={{}}>
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