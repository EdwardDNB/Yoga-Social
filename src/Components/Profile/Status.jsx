import React from 'react';

class Status extends React.Component {
  state = {
    mod: false,
    ProfileStatus: this.props.ProfileStatus,
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
    this.props.setProfileStatus(this.state.ProfileStatus);
  };
  setLocalChange = e => {
    this.setState({
      ProfileStatus: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.ProfileStatus !== this.props.ProfileStatus) {
      this.setState({
        ProfileStatus: this.props.ProfileStatus,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.mod && (
          <div>
            <span onClick={this.trueMod}>{this.props.ProfileStatus || 'You status'}</span>
          </div>
        )}
        {this.state.mod && (
          <div>
            <input
              value={this.state.ProfileStatus}
              onBlur={this.falseMod}
              onChange={this.setLocalChange}
            />
          </div>
        )}
      </div>
    );
  }
}
export default Status;
