import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd-mobile';
// import axios from 'axios';

import { login, getUserData } from './Auth.redux';

// 两个reducer 每个reducer都有一个state
// 合并reducer
@connect(
    state => state.auth,
    { login, getUserData }
)
class Auth extends Component {
    // state = {
    //     data: {}
    // }

    componentDidMount() {
        this.props.getUserData();
        // axios.get('/data')
        //     .then(res => {
        //         if (res.status === 200) {
        //             this.setState({data: res.data});
        //         }
        //     })
    }
    
    render() {
        return (
            <div>
                <h2>我的名字是{this.props.user}, 年龄{this.props.age}</h2>
                {
                    this.props.isAuth ? <Redirect to='/dashboard' /> : null
                }
                <h2>没有权限, 需要登录</h2>
                <Button type='primary' onClick={this.props.login}>登录</Button>
            </div>
        );
    }
}

export default Auth;