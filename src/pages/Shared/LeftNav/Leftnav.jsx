import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kid1 from "../../../assets/1.png";
import kid2 from "../../../assets/2.png";
import kid3 from "../../../assets/3.png";

const Leftnav = () => {
  const [catagorieds, setCatagorieds] = useState([]);
  useEffect(() => {
    fetch("../../../../public/data/catagories.json")
      .then((res) => res.json())
      .then((data) => setCatagorieds(data))
      .catch((error) => console.error(error));
  }, []);
  // console.log(catagorieds);
  return (
    <div>
      <h2>All Caterogy</h2>
      <div className="p-4" style={{ background: "#F4F4F4" }}>
        {catagorieds.map((category) => (
          <p key={category.id}>
            <Link className="text-secondary fs-5 text-decoration-none"
              to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
      <div>
        <div style={{ background: "#F3F3F3" }} className="text-center p-4 my-3">
          <div className="mb-3">
            <img src={kid1} />
            <h5 className="mt-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h5>
            <div className="d-flex justify-content-between text-secondary">
            <p>Sports</p>
            <p>Jan 4, 2022</p>
            </div>
          </div>
          <div className="mb-3">
            <img src={kid2} />
            <h5 className="mt-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h5>
            <div className="d-flex justify-content-between text-secondary">
            <p>Sports</p>
            <p>Jan 4, 2022</p>
            </div>
          </div>
          <div className="mb-3">
            <img src={kid3} />
            <h5 className="mt-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h5>
            <div className="d-flex justify-content-between text-secondary">
            <p>Sports</p>
            <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftnav;
