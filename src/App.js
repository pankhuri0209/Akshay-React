import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/logo.png";
//import Header from "./components/Header";
import NewHeader, { Title } from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
const AppLayout = () => {
  return (
    <React.Fragment>
      <NewHeader />
      <Outlet />
      {/* <Body />
      <Contact /> */}
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
