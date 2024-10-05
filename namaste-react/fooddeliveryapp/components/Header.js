import { useState } from "react";

const Header = () => {
  // Using JS variables to update the value in UI does not work hence we use React Hooks.
  //let btnName = "Login";
  let [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    //btnName = "Logout";
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://dcassetcdn.com/design_img/1889677/444768/444768_10393234_1889677_85203911_image.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Account</li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLogin}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
