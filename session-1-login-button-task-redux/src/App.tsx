import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login-signup/Login";
import Signup from "./pages/login-signup/SignUp";
import { RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/Error/NotFound";
import { useContext } from "react";
import AuthContext from "./store/AuthContext";
import Unauthorized from "./pages/Error/Unauthorized";

function App() {
  const isLoggined = useContext(AuthContext).isLoggin;
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: isLoggined ? <HomePage /> : <Unauthorized /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
