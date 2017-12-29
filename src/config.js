import axios from 'axios';
import { Toast } from 'antd-mobile';

// 拦截请求
axios.interceptors.request.use(function(config) {
    Toast.loading('加载中', 0);
    return config;
})

// 拦截响应
axios.interceptors.response.use(function(config) {
    setTimeout(() => {
        Toast.hide();
    }, 2000)
    return config;
})

// TODO: 在拦截器中对后端返回的状态代码做统一处理 以及超时的处理?
// FIXME: 测试