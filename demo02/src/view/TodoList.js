import "antd/dist/antd.css";
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "../store/index.js";

class TodoList extends Component {
  constructor(props) {
    console.log(store.getState()); //获的仓库的数据
    super(props);
    this.state = {};
    this.state = store.getState();
    this.addListFn = this.addListFn.bind(this);
    this.changeFn = this.changeFn.bind(this);

    this.storeChange = this.storeChange.bind(this); //转变this指向
    store.subscribe(this.storeChange); //订阅Redux的状态
  }

  render() {
    return (
      <div>
        <div>
          <Input
            placeholder="jspang"
            value={this.state.inputValue}
            onChange={this.changeFn}
            style={{ width: "250px" }}
          />
          <Button type="primary" onClick={this.addListFn}>
            增加
          </Button>
          <Button>删除</Button>
        </div>
        <hr />
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.data}
            renderItem={(item, index) => (
              <List.Item>
                {item}{" "}
                <div onClick={this.deleteItem.bind(this, index)}>删除</div>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  addListFn() {
    const action = { type: "addItem" };
    store.dispatch(action);
  }
  // 值变化时，修改仓库的值
  changeFn(e) {
    // console.log(e.target.value);
    // this.setState({
    //   inputValue: e.target.value,
    // });
    const action = {
      type: "changeInput",
      value: e.target.value,
    };
    store.dispatch(action); //通知仓库管理员哪里发生变化了
  }
  deleteItem(index) {
    const action={type:'deleteItem',index}
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
}
export default TodoList;
