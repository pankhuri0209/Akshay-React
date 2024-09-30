import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";
import Profile from "./ProfileClass";

class About extends Component {
  constructor(props) {
    super(props);

    //  this.console.log("constructor");
  }

  async componentDidMount() {
    console.log("componentDidMount--");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is context</p>
        <ProfileFunctionalComponent name={"Pankhuri"} />
        <Profile name={"Pankhuri"} />
      </div>
    );
  }
}

export default About;
