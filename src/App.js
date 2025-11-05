import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js";
import Body from "../components/Body.js";
import About from "../components/About.js";
import Error from "../components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "../components/Contact.js";
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
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

// const heading = React.createElement("h1", {}, "React101");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={router} />);
