import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Newscard from "../Newscard/Newscard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
      <div>
          { id && <h2>This Category News: {categoryNews.length}</h2>}
          {
              categoryNews.map(news => <Newscard
                  key={news._id}
                  news={news}
              ></Newscard>)
          }
      </div>
  );
};

export default Category;
