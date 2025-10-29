import { createBrowserRouter } from "react-router-dom";
import Mainpages from "./components/mainpage/mainpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpages />,
  },
]);

export default router;
