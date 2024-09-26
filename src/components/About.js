import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";

import Profile from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p> {""}This is a namaste react course chapter 7</p>
      <ProfileFunctionalComponent name={"Pankhuri"} />
      <Profile name={"Pankhuri class"} xyz="abc" />
    </div>
  );
};

export default About;
