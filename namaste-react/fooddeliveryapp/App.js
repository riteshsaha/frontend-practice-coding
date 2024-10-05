import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/* 
Header
    - Logo
    - Nav Items
Body
    - Search
    - Restaurant Container
        - Restaurant Card
Footer
    - Copyright
    - Links
    - Address
    - Contact
*/

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
