import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile Class Component </h1>
        <h2>Name: {this.props.name}</h2>
        <h2>XYZ: {this.props.xyz}</h2>
      </div>
    );
  }
}

export default Profile;
