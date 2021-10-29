// input
import React from "react";

class UserField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        id={this.props.id}
        type="text"
        value={this.props.inputValue}
        onChange={this.props.handleUserInput}
      />
    );
  }
}

export default UserField;
