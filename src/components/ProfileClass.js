import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: { name: "DummyName", location: "DummyLocation" } };
    //create state
    // this.state = {
    //   count: 0,
    //   count2: 0,
    // };
    console.log("Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pankhuri0209");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(" componentDidMount");
  }

  render() {
    const { count } = this.state;
    console.log("render");
    return (
      <div>
        <h1>Profile Class Component </h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        {/* <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: 1, count2: 2 });
          }}
        >
          Set Count
        </button> */}
      </div>
    );
  }
}

export default Profile;
