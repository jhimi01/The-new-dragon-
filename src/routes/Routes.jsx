import { Navigate, createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import News from "../pages/News/News/News";
import Newslayout from "../layout/NewsLayout/Newslayout"
import Loginlayout from "../layout/Loginlayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
// import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginlayout></Loginlayout>,
    children: [
{
  path :'/',
  element : <Navigate to= '/category/0'></Navigate>
}
      ,{
        path: '/login',
        element: <Login />
    },{
      path :'register',
      element : <Register></Register>
    }
    ]
  },
    {
      path: "/category",
      element: <Main></Main>,
      children: [
        // {
        //     path: '/category',
        //     // element: <Home></Home>,
        //     // loader: (()=>fetch('/news.json')),
        //     element: <Category></Category>,
        //     loader: (()=>fetch('http://localhost:5000/news')),

        // },
        {
          path: ':id',
          element: <Category></Category>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
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