import React from 'react';
// import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';

class Login extends React.PureComponent {


    render() {
        const layout = {
            labelCol: {
                span: 5,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 5,
                span: 16,
            },
        };

        const onFinish = (values) => {
            console.log('Success:', values);
            console.log(this.props)
            let $this = this;
            if (values.password.length > 5 && values.username.length >= 3) {

                if (values.remember) {

                    $this.props.history.push({ pathname: '/public', state: { name: values.username } })
                }
            }
        };

        const onFinishFailed = () => {
            message.error('用户名或密码不能为空');
        };

        function mess() {
            message.warning("要在自己的电脑上勾选哦(#^.^#)")
        }



        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: false }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ margin: "0 auto", width: "80vw", padding: "14% 0 0 0 " }}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked" >
                    <Checkbox onChange={mess.bind(this)}>7天免登录</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
              </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Login;