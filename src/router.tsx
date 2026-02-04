import { createBrowserRouter} from "react-router-dom";
import Loginmain from "./pages/loginmain";
import Addpage from "./pages/addpage";
import Note from "./pages/notepage";
import Profile from "./pages/profilepage";
import Login from "./pages/signin";
import Signup from "./pages/signup";
import HomePage from "./pages/homepage/index";
import Mainpages from "./pages/mainpage/index";
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
        element: <Addpage />,
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
