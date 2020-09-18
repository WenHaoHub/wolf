import React, { Component } from 'react'
import api from '../../apis/api';
import { Image,Avatar,Button,Divider} from 'antd';
import {UserOutlined,WhatsAppOutlined,EnvironmentOutlined,DollarOutlined} from '@ant-design/icons';

export default class Sdetails extends Component {
    state={
      id:'5f6421a044100000830041b3',
      list:{}
    }
    getData=async (id)=>{
        const {getone}=api.students;
       const data= await getone({id});
       this.setState({list:data.getdata[0]})
    }
    componentDidMount(){
        this.getData(this.state.id)
    }
    render() {
        const {name,account,headImage,telephone,loginAdress,points}=this.state.list;
        return (
            <div className="sDetails">
                <div className="box">
                    <div className="headimg">
                        <Avatar size={64}  src={headImage}/>
                         <p>{name}</p>
                    </div>
                    <div className="list">
                    <Divider orientation="left">账号</Divider>
                        <p><UserOutlined />____{account}</p>
                    </div>
                    <div className="list">
                    <Divider orientation="left">积分</Divider>
                        <p><DollarOutlined />____{points}金豆</p>
                    </div>
                    <div className="list">
                    <Divider orientation="left">联系电话</Divider>
                        <p><WhatsAppOutlined />____{telephone}</p>
                    </div>
                    <div className="list">
                    <Divider orientation="left">常用地址</Divider>
                        <p><EnvironmentOutlined />____{loginAdress}</p>
                    </div>
                    <div className="btn">
                     <Button type="primary" size="large " block danger>封禁用户</Button>
                    </div>
                </div>
            </div>
        )
    }
}
