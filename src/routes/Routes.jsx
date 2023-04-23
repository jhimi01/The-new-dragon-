import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import Newslayout from "../layout/NewsLayout/Newslayout";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main>Hello world!</Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <Category></Category>
        }
      ]
    },
    {
      path: '/news/:id',
      element: <Newslayout/>,
      children: [
        {
          path: ':/id',
          element: <News></News>
        }
      ]
    }
  ]);

  export default router;