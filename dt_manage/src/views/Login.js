import React from 'react';
// import ReactDOM from 'react-dom';
import "../css/Login.css"
import sha256 from 'crypto-js/sha256';
import { Form, Input, Button, message, Row, Col } from 'antd';
import request from "../utils/request.js"
class Login extends React.PureComponent {
    state = { image: '' }
    componentDidMount() {

        this.yanzhengma()
    }

    // 验证码
    yanzhengma = () => {
        request.get("/admin/vscode").then((res) => {
            console.log(res)
            if (res.msg === "success") {
                this.setState({
                    image: res.data
                })
            }
        })
    }

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
            let $this = this;
            console.log(values)
            if (values.password.length > 5 && values.username.length >= 2) {
                let pass = sha256(values.password).toString();

                request.post("admin/login",
                    {
                        username: values.username,
                        password: pass,
                        vscode: values.check
                    }).then((res) => {
                        if (res.status === 200) {
                            let obj = { authority: res.data.authority, username: res.data.username, authorzation: res.data.authorzation }
                            $this.props.history.push({ pathname: '/public', state: { name: values.username } })
                            localStorage.setItem("username", JSON.stringify(obj))
                        } else {
                            message.error('账号或密码错误,请重试！')
                        }

                    })
            }
        };

        const onFinishFailed = () => {
            message.error('用户名、密码和验证码不能为空');
        };

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
                    <Input allowClear maxLength={12} />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password allowClear />
                </Form.Item>

                <Row>
                    <Col offset={3} span={11} >
                        <Form.Item
                            label="验证码"

                            name="check"
                            rules={[{ required: true, message: '输入验证码啊混蛋ε＝ε＝ε＝(#>д<)ﾉ' }]}
                        >
                            <Input allowClear maxLength={4} />

                        </Form.Item>
                    </Col>
                    <Col>
                        <div dangerouslySetInnerHTML={{ __html: this.state.image }} onClick={this.yanzhengma}></div>
                    </Col>
                </Row>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >
                        登录
              </Button>
                </Form.Item>
            </Form >
        )
    }
}

export default Login;