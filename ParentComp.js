import React, { Component } from "react";
import RegualrComp from "./RegualrComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Satyal hero",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Satyal hero",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Component...............");
    return (
      <div>
        Parent Component
        {/* <RegualrComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
