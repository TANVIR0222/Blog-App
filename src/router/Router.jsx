import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import About from "../detailsPage/About";
import Contact from "../detailsPage/Contact";
import Privacy from "../detailsPage/Privacy";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children:[
        {
            path: '/',
            element:<Home/>
        },
        {
            path: '/about',
            element:<About/>
        },
        {
            path: '/contact',
            element:<Contact/>
        },
        {
            path: '/privacy',
            element:<Privacy/>
        },
      ]
    },
  ]);