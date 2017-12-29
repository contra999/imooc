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
        const match = this.props.match;
        console.log(match);
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
                        {/* url是实际地址 path可以自定义带有参数 */}
                        <Link to={`${match.url}/`}>一营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/erying`}>二营</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
                    </li>
                </ul>
                {/* exact 完全匹配path中的内容, 否则匹配/dashboard/*的内容 */}
                <Route path={`${match.url}/`} exact component={App} />
                <Route path={`${match.url}/erying`} component={Erying} />
                <Route path={`${match.url}/qibinglian`} component={Qibinglian} />
                {/* path='/:location' 可以匹配斜杠加任意参数(可用于404页面) 注意不匹配path='/'的情况 */}
                {/* <Route path='/:location' component={Test} /> */}
            </div>
        );
        return this.props.isAuth ? app : redirectToLogin;
    }
}

export default Dashboard;