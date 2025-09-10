import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import MainLayout from "../components/Layout/MainLayout";
import ProductDetail from "../components/Product/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "detail-product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
