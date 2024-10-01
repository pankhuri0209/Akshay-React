import React, { lazy, Suspense, createElement } from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/logo.png";
//import Header from "./components/Header";
import NewHeader, { Title } from "./components/Header.js";
import Footer from "./components/Footer.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/Shimmer.js";
//import Instamart from "./components/Instamart.js";

const About = lazy(() => import("./components/About.js"));

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
//lazy import
const Instamart = lazy(() => import("./components/Instamart"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <About />
          </Suspense>
        ),

        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
