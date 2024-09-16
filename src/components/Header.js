import { useState } from "react";
import logo from "../../assets/logo.png";

export const Title = () => (
  // <h1 id="title" key="h2">
  //   Shalu's Kitchen
  // </h1>
  <a href="/">
    <img className="logo " alt="logo" src={logo} />
  </a>
);
const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      {/* <button onClick={() => setTitle("New food app")}>Change Title</button> */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact</li>
          <li>Cart</li>

          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
