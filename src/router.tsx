import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/login";
import Signup from "./components/login/signup";
import Loginmain from "./components/loginmain/loginmain";
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
  },
]);

export default router;
