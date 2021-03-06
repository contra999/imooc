
const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

// reducer
export function counter(state = 10, action) {
    // 刚开始会打印三次 猜测是redux初始化时会往里瞎jb传东西 redux官方快速教程里有说
    // console.log(state);
    switch (action.type) {
        case '加机关枪':
            return state + 1;
        case '减机关枪':
            return state - 1;
        default:
            return state;
    }
}

// action creator
export function addGun() {
    return {type: ADD_GUN};
}

export function removeGun() {
    return {type: REMOVE_GUN};
}

export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGun())
        }, 2000);
    };
}

// import { createStore } from 'redux';
// 1. 新建store
// 通过reducer建立
// 根据老的状态和action 生成新的state
// function counter(state = 0, action) {
//     switch (action.type) {
//         case '加机关枪':
//             return state + 1;
//         case '减机关枪':
//             return state - 1;
//         default:
//             return 10;
//     }
// }
// 1. 新建store
// const store = createStore(counter);

// const init = store.getState();
// console.log(init);

// function listener() {
//     const current = store.getState();
//     console.log(`现在有机关枪${current}把`);
// }

// store.subscribe(listener);

// 派发事件 传递action
// store.dispatch({type: '加机关枪'});
// store.dispatch({type: '加机关枪'});
// store.dispatch({type: '减机关枪'});