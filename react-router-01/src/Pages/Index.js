import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class Index extends Component {
  constructor(props) {
    super(props);
    this.props.history.push("/home/");  //编程式重定向
    this.state = {};
  }
  render() {
    return (
      <h2>
         我是首页
        <Redirect to="/home/" />
      </h2>
    );
  }
}

export default Index;
