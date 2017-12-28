const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export function auth(
    state = {
        isAuth: false,
        user: '李云龙'
    }, 
    action
) {
    // 刚开始会打印三次 猜测是redux初始化时会往里瞎jb传东西 redux官方快速教程里有说
    // console.log(state);
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true};
        case LOGOUT:
            return {...state, isAuth: false};
        default:
            return state;
    }
};

// actionCreatorFunction
export function login() {
    return { type: LOGIN }
}

export function logout() {
    return { type: LOGOUT }
}
