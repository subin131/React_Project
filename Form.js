import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      topic: "react",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  selectOptionChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.selectOptionChange}>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
