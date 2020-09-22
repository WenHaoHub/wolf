import React, { Component } from 'react';
import { Table, Space, Button, Modal, message } from 'antd';
import '../../assets/style/orders.scss'
import api from '../../apis/api'

export default class Orders extends Component {
    componentDidMount() {
        this.getAllOrders();
    }
    state = {
        dataSource: [],
        columns: [
            {
                title: '订单编号',
                dataIndex: '_id',

            },
            {
                title: '用户名',
                dataIndex: 'students',
                render: (item) => {
                    return <>{item.name}</>
                }
            }, {
                title: '课程',
                dataIndex: 'className',
            },
            {
                title: '教练',
                dataIndex: 'coaches',
                render: (item) => {
                    return <>{item.name}</>
                }
            },
            {
                title: '订单价格',
                dataIndex: 'orderPrice',
            },
            {
                title: '日期',
                dataIndex: 'time',
            },
            {
                title: '操作',
                render: (text) => (
                    <Space size="middle">
                        <Button type="primary" danger onClick={() => this.delActive(text._id)}>删除</Button>
                    </Space>
                ),
            },
        ],
        pagenum: 1,
        datanum: 10
    }
    delActive = (index) => {
        Modal.confirm({
            title: '警告',
            content: '确定要删除吗？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => this.deleteit(index),
        });

    }
    async deleteit(id) {
        try {
            await api.orders.deleteOrder({ _id: id, success: true });
            await this.getAllOrders();
            message.success('删除成功');
        } catch (error) {
            console.log('报错' + error);
        }

    }
    async getAllOrders() {
        try {
            const { _id } = JSON.parse(localStorage.userInfo);
            const data = await api.orders.getAllOrders(_id);
            await this.setState({
                dataSource: data.rows
            })

        } catch (error) {
            console.log(error);
        }

    }
    render() {
        return (
            <div className="orders-box">
                <Table
                    columns={this.state.columns}
                    rowKey="_id"
                    dataSource={this.state.dataSource}
                    pagination={{ position: ['bottomCenter'] }}
                    onChange={() => console.log('afawfaf')}

                />
            </div>
        )
    }
}
