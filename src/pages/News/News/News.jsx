import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInside from '../EditorsInside/EditorsInside';


const News = () => {
    const { id } = useParams();
    const details = useLoaderData();
    const [data, setData] = useState({});
    useEffect(() => {
      const viewdata = details.find((detail) => detail._id == id);
      setData(viewdata);
    }, []);
    console.log(id);
    console.log(data);
  
    return (
       <>
         <Card>
      <Card.Img variant="top" src={data.image_url} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.details}
        </Card.Text>
        <Link to={`/category/${data.category_id}`}><Button variant="primary"><FaArrowLeft/> All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInside></EditorsInside>
       </>
    );
};

export default News;