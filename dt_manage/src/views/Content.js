import React from 'react';
import { Table, Button } from 'antd';
import "../css/Content.css"


const data = [
    {
        key: '1',
        name: 'John Brown',
        phone: "asdasdassssssssssssssssssssssssssssssdaasssssssssssssssssssssssssasssssssssssssssssssssssssasssssssssssssssssssssssssassssssssssssssssssssssssssdas",
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '7',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '8',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '9',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '10',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '11',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '12',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '13',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '14',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },

    {
        key: '15',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '16',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '17',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '18',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '19',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },

    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        sex: "msale",
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        phone: "1234568912",
        age: 32,
        sex: "male",
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

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




function Content(props) {
    console.log('home.props=', props)


    return (
        <div style={{}}>
            <>
                <Table columns={columns} dataSource={data} pagination={{
                    showSizeChanger,
                    onShowSizeChange,
                    showQuickJumper
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