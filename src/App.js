import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js";
import Body from "../components/Body.js";

/*
-Header
  -Logo
  -Nav Items
-Body
  -Search
  -Restaurant Container
    -Food Cards
-Footer
  -Link
  -Address
  -Contact
*/
//React Element -> Object

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// const heading = React.createElement("h1", {}, "React101");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
