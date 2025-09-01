import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import { RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
