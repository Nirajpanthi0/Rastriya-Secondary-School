import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./Component/pages/About";
import Contact from "./Component/pages/Contact";
import Notice from "./Component/pages/Notice";
import Gallery from './Component/pages/Gallery';
import Result from "./Component/pages/Result";
import Home from "./Component/pages/Home";
import ImageDummy from "./Component/resultpage/ImageDummy"; 
import "./index.css";
import Credit from "./Component/pages/credit";
import Noticedital from "./Component/pages/noticedital";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about", element: <About /> },
      { path: "notice", element: <Notice /> },
      { path: "result", element: <Result /> },
      { path: "contact", element: <Contact /> },
      { path: "gallery", element: <Gallery /> },
      { path: "home", element: <Home /> },
      { path: "credit", element: <Credit /> },
      { path: "noticedital", element: <Noticedital /> },
      {
        path: "primarylevel",
        element: (
          <ImageDummy
            imageUrl="https://via.placeholder.com/600x400"
            text="Primary Level"
          />
        ),
      },
      {
        path: "secondarylevel",
        element: (
          <ImageDummy
            imageUrl="https://via.placeholder.com/600x400"
            text="Secondary Level"
          />
        ),
      },
      {
        path: "higherlevel",
        element: (
          <ImageDummy
            imageUrl="https://via.placeholder.com/600x400"
            text="Higher Level"
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
