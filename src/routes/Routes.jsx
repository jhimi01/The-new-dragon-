import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import News from "../pages/News/News/News";
import Newslayout from "../layout/NewsLayout/Newslayout"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/category/:id',
          element: <Category></Category>,
          // loader: (()=>fetch('news.json'))
          loader: (({params})=>fetch('/catagories.json'))
        }
      ]
    },
    {
      path: '/news/:id',
      element: <Newslayout></Newslayout>,
      loader: (()=>fetch('/news.json')),
      
      children: [
        {
          path: ':/id',
          element: <News></News>,
          loader: ({params})=>fetch('news.json'),
        }
      ]
    }
  ]);

  export default router;