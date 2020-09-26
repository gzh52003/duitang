import React, { useEffect, useState, useCallback,useMemo } from 'react';
import { Table, Button, Space, Modal, Form, Input, Select, Pagination, Popconfirm } from 'antd';
import request from '../utils/request'
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import sha256 from 'crypto-js/sha256';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
    },

};

const zhiwei = [
    { label: '老板', value: '老板' },
    { label: 'CEO', value: 'ceo' },
    { label: '总经理', value: '总经理' },
    { label: '总监', value: '总监' },
    { label: '主管', value: '主管' },
    { label: '员工', value: '员工' },
];
const selectGender = [
    { label: '男', value: '男' },
    { label: '女', value: '女' },
]
const handleChange = () => {
    console.log('000');
};

function Memberlist(props) {
    // console.log('home.props=', props)
    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false);
    const [addVisible, setaddVisible] = useState(false);
    const [total, gettotal] = useState(10)
    const [UpdataDefalut, setUpdataDefalut] = useState({})
//    const updata =  useMemo(function(){

//    },[])

    // 修改数据
    const xiuGai = useCallback(async function (event) {
        // console.log('修改数据', event.currentTarget.parentElement.parentElement.parentElement.parentElement.firstElementChild.innerHTML)
        const id = event.currentTarget.parentElement.parentElement.parentElement.parentElement.firstElementChild.innerText
        const { data:res } = await request.get('/admin/single/' + id)
        // console.log(data,'data');
        setUpdataDefalut(res[0])
        setVisible(true)
        // console.log(name,'name');
    })
    const updataClick = useCallback( async value=>{
        console.log(value,'修改')
    },[])
    // 删除数据
    const confirmdelete = useCallback(async function (event) {
        console.log(event, '666', this);
        console.log('删除员工', event.currentTarget)
        const id = event.currentTarget.parentElement.parentElement.parentElement.parentElement.firstElementChild.innerHTML
        await request.remove('/admin/' + id)
        const { data } = await request.get('/admin', { page: 1, size: 10, tal: true })
        setData(data)

    })


    // 添加成员
    const addmenber = useCallback(function () {
        setaddVisible(true)
    })
    //添加成员确定函数
    const onFinish = useCallback(async values => {
        let { name: username, phone, gender, email, password, zhiwei: authority } = values
        password = sha256(password).toString()
       await request.post('/admin', {
            username,
            phone,
            gender,
            email,
            password,
            authority,
        })
        const { data } = await request.get('/admin', { page: 1, size: 10, tal: true })
        setData(data)
        setaddVisible(false)
    },[]);
    // 点击切换页码
    const changepages = useCallback(async (page) => {
        const { data } = await request.get('/admin', { page, size: 10, tal: true })
        setData(data)
    },[])

    // 请求数据
    useEffect(async () => {
        const data = await request.get('/admin', { page: 1, size: 10, tal: true })
        gettotal(data.total)
        setData(data.data)

    }, [])


    const columns = [
        {
            title: '工号',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: '姓名',
            dataIndex: 'username',
            key: 'username',

        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
            className: "content_row",
            rend: text => {
                return (
                    <p>{text}</p>
                )
            }
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '职位',
            dataIndex: 'authority',
            key: 'authority'
        },

        {
            title: '操作',
            key: 'action',
            render: (text) => (
                <Space size="middle">
                    <Button type="defalut" className="ok" shape="circle" icon={<EditOutlined />} size='middle' onClick={xiuGai} />
                    {/* <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />} > */}
                    <Button type="defalut" className="delete" shape="circle" icon={<DeleteOutlined />} size='middle' danger onClick={confirmdelete} />
                    {/* </Popconfirm> */}
                </Space>
            ),
        }
    ]

    return (
        <div style={{}}>
            <>
                <Button type="primary" size='large' style={{ margin: '20px' }} onClick={addmenber}>添加成员</Button>
                <Modal
                    title="添加成员信息"
                    centered
                    visible={addVisible}
                    onOk={() => setaddVisible(false)}
                    onCancel={() => setaddVisible(false)}
                    width={1000}
                    footer={null}
                >
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name='name' label="姓名" rules={[{ required: true }]} style={{ width: '50vw' }} >
                            <Input />
                        </Form.Item>
                        <Form.Item name="gender" label="性别" rules={[{ message: 'Missing gender' }]} style={{ width: '50vw' }}>
                            <Select options={selectGender} onChange={handleChange} />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="手机号"
                            style={{ width: '50vw' }}
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name='email' label="邮箱" rules={[{ type: 'email' }]} style={{ width: '50vw' }}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            style={{ width: "50vw" }}
                            rules={[
                                {
                                    min:6,
                                    max:20,
                                    required: true,
                                    message: '密码长度6至20位',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name="zhiwei" label="职位" rules={[{ required: true, message: 'Missing area' }]} style={{ width: '50vw' }}>
                            <Select options={zhiwei} onChange={handleChange} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit" onFinish>
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

                <Table columns={columns} dataSource={data} pagination={false} ></Table>
                <Pagination defaultCurrent={1} total={total} defaultPageSize={10} onChange={changepages} style={{ textAlign: 'center', marginTop: '5px' }} />
                <Modal
                    title="修改用户信息"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                    destroyOnClose={true}
                >
                    <Form {...layout} name="nest-messages" onFinish={updataClick} initialValues={UpdataDefalut} validateMessages={validateMessages}>
                        <Form.Item name='username' label="姓名" rules={[{ type: 'name' }]} style={{ width: "50vw" }}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="gender" label="性别" rules={[{ message: 'Missing gender' }]} style={{ width: '50vw' }}>
                            <Select options={selectGender} />
                        </Form.Item>
                        <Form.Item name='phone' label="手机号" rules={[{ type: 'phone' }]} style={{ width: "50vw" }}>
                            <Input />
                        </Form.Item>
                        <Form.Item name='email' label="邮箱" rules={[{ type: 'email' }]} style={{ width: "50vw" }}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            style={{ width: "50vw" }}
                            rules={[
                                {
                                    min:6,
                                    max:20,
                                    message: '密码长度6至20位',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name="authority" label="职位" rules={[{ message: 'Missing area' }]} style={{ width: "50vw" }}>
                            <Select options={zhiwei} />
                        </Form.Item>

                        {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item> */}
                    </Form>
                </Modal>

            </>,
        </div >
    )
}


export default Memberlist;