import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ],
  { basename: "/Marknow-portfolio-task" } // ✅ এখানে basename যোগ করো
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
