import { createBrowserRouter } from "react-router-dom";
import Mainpages from "./components/mainpage/mainpage";
import Login from "./components/login/login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpages />,
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

export default router;
