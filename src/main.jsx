import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Navbar2 from "./components/navbar/Navbar2.jsx"; // Import Navbar2 component
import "./index.css";
// Importing slick carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ServicePage from "./components/pages/ServicePage.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar2 /> {/* Render Navbar2 component on every page */}
        <App />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Navbar2 /> {/* Render Navbar2 component on every page */}
        <ServicePage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar2 /> {/* Render Navbar2 component on every page */}
        < AboutPage/>
      </>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
