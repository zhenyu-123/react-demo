import React, { Component } from "react";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>List Page</h2>
      </div>
    );
  }
  componentDidMount(){
    console.log(this.props.match.params.id)
  }
}

export default List;
