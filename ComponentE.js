import React, { Component } from "react";
import ComponentF from "./ComponentF";
import userContext from "./userContext";
class ComponentE extends Component {
  static contextType = userContext;
  render() {
    return (
      <div>
        Component E is First is that {this.context}
        <ComponentF />;
      </div>
    );
  }
}

export default ComponentE;
