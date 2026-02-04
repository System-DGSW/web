import { createBrowserRouter } from "react-router-dom";
import Loginmain from "./pages/loginmain/loginmain";
import Add from "./pages/Maincomponents/Add";
import HomePage from "./pages/Maincomponents/HomePage";
import Note from "./pages/Maincomponents/Note";
import Profile from "./pages/Maincomponents/Profile";
import Login from "./pages/signin";
import Signup from "./pages/signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/main",
    element: <Loginmain />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "note",
        element: <Note />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
