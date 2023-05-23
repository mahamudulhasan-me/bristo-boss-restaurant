import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import OurMenu from "../components/Pages/OurMenu/OurMenu";
import Main from "../layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-menu",
        element: <OurMenu />,
      },
    ],
  },
]);

export default router;
