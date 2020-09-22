import React from 'react';
import { Table, Button, } from 'antd';


// function onChange(pageNumber) {
//     console.log('Page: ', pageNumber);
// }

const data = [
    {
        key: '1',
        name: 'John Brown',
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
        title: '手机号',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render: text => {
            if (text === "male") {
                return (
                    <span>男</span>
                )
            } else {
                return (
                    <span>女</span>
                )
            }
        }
    },
    {
        title: '生日',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '地区',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'tags',
        dataIndex: 'tags',
        render: text => <> {
            text.map(ind => {
                return (
                    <Button key={ind + 1} >{ind}</Button>
                    // <Button key={ind + 1} onClick={}>{ind}</Button>
                )

            })
        }</>

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

function User() {
    return <div style={{}}>
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
}

export default User;