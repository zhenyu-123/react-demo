/*
 * @Description: 
 * @Autor: sy
 * @Date: 2023-03-20 14:25:57
 * @LastEditors: sy
 * @LastEditTime: 2023-03-20 17:48:21
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props.name);//{name: '参数', children: 'Modal 内容'}
        this.state = {
        }
    }
    render() {
        // // 正常渲染
        // return <div className="modal">
        //     {this.props.children} {/* vue slot */}
        // </div>

        // 使用 Portals 渲染到 body 上。
        // fixed 元素要放在 body 上，有更好的浏览器兼容性。
        return ReactDOM.createPortal(
            <div className="modal">{this.props.children}</div>,
            document.body // DOM 节点
        )
    }
}

export default App
