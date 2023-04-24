import moment from "moment";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaRegStarHalf,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Newscard = ({ singlenews }) => {
  const [more, setMore] = useState(false);

  const {
    title,
    details,
    thumbnail_url,
    image_url,
    author,
    total_view,
    _id,
    rating,
  } = singlenews;

  const seemore = () => {
    setMore(!more);
  };

  return (
    <Card className="mb-4">
      <Card.Header style={{ background: "#d5d5d5" }}>
        <div className="d-flex justify-content-between align-items-center mx-2 my-1">
          <div className="d-flex justify-content-between align-items-center">
            <img
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
              src={author.img}
              alt="author"
            />
            <div className="text-start">
              <h5>{author.name}</h5>
              <p className="mb-0">
                {moment(author.published_date).format("yyyy-MM-D")}
              </p>
            </div>
          </div>
          <div>
            <FaShareAlt className="me-2" />
            <FaRegBookmark />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" className="my-2" src={image_url} />
        <Card.Text>
          <div>
            <p className="mb-0">{more ? details : details.slice(0, 300)}</p>
            <div style={{ cursor: "pointer",fontWeight:'bold' }} onClick={seemore}>
              {more ? "see less" : "see more"}
            </div>
          </div>
        </Card.Text>
        <Link to={`/news/${_id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center  justify-content-between">
        <div>
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div className="d-flex align-items-center">
          <p className="mb-0 me-2">{total_view}</p>
          <FaEye />
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Newscard;
