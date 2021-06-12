import React, { Component } from "react";
import RefChild from "./RefChild";

class RefParent extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <RefChild ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default RefParent;
