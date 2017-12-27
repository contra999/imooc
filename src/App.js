import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { createStore } from 'redux';
// import { Button, List } from 'antd-mobile';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import {addGun, removeGun, addGunAsync} from './index';

// class App extends Component {
//   render() {
//     const boss = '李云龙';
//     return (
//       <div>
//         <h2>团长{boss}</h2>
//         <一营 老大='张大喵' />
//         <骑兵连 老大='孙德胜' />
//       </div>
//     );
//   }
// }

// function 骑兵连(props) {
//   return <h2>骑兵长{props.老大}，冲啊</h2>
// }

// class 一营 extends Component {
//   state = {
//     solders: ['瓠子', '痞子', '骨子']
//   }
  
//   componentWillMount() {
//     console.log('组件马上要加载了')
//   }

//   componentDidMount() {
//     console.log('组件加载完毕')
//   }

//   addSolder() {
//     console.log('add new');
//     this.setState({
//       solders: [...this.state.solders, 'new' + Math.random()]
//     });
//   }

//   render() {
//     console.log('组件正在加载了');
//     return (
//       <div>
//         <h2>一营长, {this.props.老大}</h2>
//         <Button 
//           type='primary' 
//           onClick={() => {
//             this.addSolder();
//           }}>加入</Button>
//           <List
//             renderHeader={() => '士兵列表'}
//           >
//             {
//               this.state.solders.map(v => {
//                 return (
//                   <List.Item key={v}>
//                     {v}
//                   </List.Item>
//                 )
//               })
//             }
//           </List>
//       </div>
//     )
//   }
// }

// const mapStatetoProps = (state) => {
//   return {num: state}
// }
// const actionCreators = {addGun, removeGun, addGunAsync};
// console.log(actionCreators);
// App = connect(mapStatetoProps, actionCreators)(App);
// 装饰器写法 与上面传统写法对比 
// 需安装babel-plugin-transform-decorators-legacy 并配置babel plugins 见package.json
// 为防止编辑器对装饰器报错,需建立jsconfig.json文件并配置

// 写法一
// @connect(mapStatetoProps, actionCreators)

// 写法二
@connect(
  // 将需要state的属性放到props里
  state => ({num: state}),
  // 将需要的方法放到props里, 且自动dispatch 注意这里是定义对象的简写方式
  { addGun, removeGun, addGunAsync }
)
class App extends Component {
  render() {
    const { num, addGun, removeGun, addGunAsync } = this.props;
    return (
      <div>
        <h1>现在有机关枪{num}把</h1>
        <Button type='primary' onClick={addGun}>申请武器</Button>
        <Button type='primary' onClick={removeGun}>上交武器</Button>
        <Button type='primary' onClick={addGunAsync}>拖两天再给</Button>
      </div>
    )
  }
}

export default App;
