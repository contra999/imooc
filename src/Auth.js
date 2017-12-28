import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd-mobile';

import { login } from './Auth.redux';

// 两个reducer 每个reducer都有一个state
// 合并reducer
@connect(
    state => state.auth,
    { login }
)
class Auth extends Component {
    render() {
        return (
            <div>
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