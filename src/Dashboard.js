import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

import App from './App';
import { logout } from './Auth.redux';

function Erying() {
    return <h2>二营</h2>
}

function Qibinglian() {
    return <h2>骑兵连</h2>
}

// class Test extends Component {
//     render() {
//         console.log(this.props);
//         return <h2>测试组件 {this.props.match.params.location}</h2>;
//     }
// }

@connect(
    state => state.auth,
    { logout }
)
class Dashboard extends Component {
    render() {
        console.log(this.props);
        const redirectToLogin = <Redirect to='/login' />;
        const app = (
            <div>
                <h1>独立团</h1>
                {
                    this.props.isAuth ? 
                        <Button type='primary' onClick={this.props.logout}>注销</Button>
                        :
                        null
                }
                <ul>
                    <li>
                        <Link to='/dashboard/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/dashboard/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                {/* exact 完全匹配path中的内容, 否则匹配/dashboard/*的内容 */}
                <Route path='/dashboard/' exact component={App} />
                <Route path='/dashboard/erying' component={Erying} />
                <Route path='/dashboard/qibinglian' component={Qibinglian} />
                {/* path='/:location' 可以匹配斜杠加任意参数(可用于404页面) 注意不匹配path='/'的情况 */}
                {/* <Route path='/:location' component={Test} /> */}
            </div>
        );
        return this.props.isAuth ? app : redirectToLogin;
    }
}

export default Dashboard;