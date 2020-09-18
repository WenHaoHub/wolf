import React, { Component } from 'react';
import { Form, Input, Button,message } from 'antd';
import api from '../../apis/api';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default class Login extends Component {
    onFinish = async (values) => {
      const res = await api.gym.login(values);
      console.log(res)
      localStorage.setItem('userInfo',JSON.stringify(res.rows))
        try {
            const res = await api.gym.login(values);
            const {token,name,role} = res.rows;
            localStorage.setItem('token',token);
            localStorage.setItem('name',name);
            localStorage.setItem('role',role);
            message.success(res.msg)
        } catch (error) {
            message.error(error.msg)
        }

    };
    render() {
        return (
            <div className="login-box-container">
                <div className="login-box">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            label="账号"
                            name="account"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your account!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <div className="form-bottom-item">
                                <Button type="primary" htmlType="submit">登录</Button>
                                <label>没有账号？去<a href="#/register">注册</a></label>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        )
    }
}
