import React, { Component } from "react";

export class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
        <input type="text" ref={this.setcbRef} />
      </div>
    );
  }
}

export default RefDemo;
