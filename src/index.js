import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { 
    BrowserRouter, 
    Route, 
    Redirect, 
    Switch 
} from 'react-router-dom';

import reducers from './reducer';
import Auth from './Auth';
import Dashboard from './Dashboard';

// 链接redux调试工具
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f=>f;
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

console.log(store.getState());

// 登录
//     没有登录信息 统一跳转到login
// 页面 导航 + 显示 + 注销
//     一营
//     二营
//     骑兵连
// router + redux
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* 只渲染命中的第一个Route */}
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/dashboard' component={Dashboard} />
                {/* 访问其他页面, 统一跳转到此页面 */}
                <Redirect to='/dashboard' />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();