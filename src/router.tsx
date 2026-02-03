import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/login";
import Signup from "./components/login/signup";
import Loginmain from "./components/loginmain/loginmain";
import Add from "./components/Maincomponents/Add";
import HomePage from "./components/Maincomponents/HomePage";
import Note from "./components/Maincomponents/Note";
import Profile from "./components/Maincomponents/Profile";
import Mainpages from "./components/mainpage/mainpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpages />,
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
