import React from 'react';

class Status extends React.Component {
  state = {
    mod: false,
  };
  trueMod = () => {
    this.setState({
      mod: true,
    });
  };
  falseMod = () => {
    this.setState({
      mod: false,
    });
  };
  render() {
    return (
      <div>
        {!this.state.mod && (
          <div>
            <span onClick={this.trueMod}>{this.props.status}</span>
          </div>
        )}
        {this.state.mod && (
          <div>
            <input value={this.props.status} onBlur={this.falseMod} />
          </div>
        )}
      </div>
    );
  }
}
export default Status;
