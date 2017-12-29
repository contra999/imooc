import axios from 'axios';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER_DATA = 'USER_DATA';

const initState = {
    isAuth: false,
    user: '李云龙',
    age: 20
}

export function auth(state = initState, action) {
    // 刚开始会打印三次 猜测是redux初始化时会往里瞎jb传东西 redux官方快速教程里有说
    // console.log(state);
    console.log(state, action);
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true};
        case LOGOUT:
            return {...state, isAuth: false};
        case USER_DATA:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

// actionCreatorFunction
export function getUserData() {
    // dispatch用来通知数据修改
    return dispatch => {
        axios.get('/data')
            .then(res => {
                if (res.status === 200) {
                    dispatch(userData(res.data))
                }
            })
    }
}

export function userData(data) {
    return { 
        type: USER_DATA,
        payload: data
    }
}

export function login() {
    return { type: LOGIN }
}

export function logout() {
    return { type: LOGOUT }
}
