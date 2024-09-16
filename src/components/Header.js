import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

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
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About </li>
          </Link>
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>
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
