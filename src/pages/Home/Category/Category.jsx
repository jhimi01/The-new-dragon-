import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Newscard from "../Newscard/Newscard";

const Category = () => {
const { id , name} = useParams();
const[news, setNews] = useState([])
const[categoryitem, setCategoryitem] = useState([])

useEffect(()=>{
    fetch('../../../../public/news.json')
    .then(res => res.json())
    .then(data => setNews(data))
},[])


useEffect(() => {
    if (id === "0") {
      setCategoryitem(news);

   
    } else {
      const category = news.filter((article) => article.category_id === id);
      setCategoryitem(category);
   
   
    }
  }, [id, news]);



  return (
    <div>
      <h2>this is catagory {id}</h2>
      <h2>News: {categoryitem.length}</h2>
   
     
      {
        categoryitem.map(singlenews => <Newscard key={singlenews._id} singlenews={singlenews}></Newscard>)

      }
    </div>
  );
};

export default Category;
