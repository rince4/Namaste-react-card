import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Connect from "./Component/Connect";
import Careers from "./Component/Careers";
import Error from "./Component/Error";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const AppRootData = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRootData} />);
