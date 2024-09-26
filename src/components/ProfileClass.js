import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    //create state
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log(" componentDidMount");
  }

  render() {
    const { count } = this.state;
    console.log("render");
    return (
      <div>
        <h1>Profile Class Component </h1>
        <h2>Name: {this.props.name}</h2>
        <h2>XYZ: {this.props.xyz}</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: 1, count2: 2 });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default Profile;
