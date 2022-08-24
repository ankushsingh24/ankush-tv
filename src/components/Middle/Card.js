import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./Row.css";

const Card = ({ mov, setFav, type, wishlist }) => {
  const [red, setRed] = useState(false);

  useEffect(() => {
    if (wishlist.find((wish) => wish.mod.id === mov.id)) {
      setRed(true);
    } else {
      setRed(false);
    }
  }, [wishlist, mov.id]);

  function setAsFavourite() {
    setFav({ mov, type });
  }

  return (
    <div className="card">
      <Link to={`/detailPage/${mov.id}/${type}`}>
        {mov.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${mov.poster_path}`}
            alt="demo"
          />
        ) : (
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="notFound"
          />
        )}
      </Link>
      <div className="card-content">
        <div className={red ? "newPlus" : "plus"} onClick={setAsFavourite}>
          <BsPlusLg />
        </div>
        <div className="info">
          <div className="card-name">{mov.title || mov.name}</div>
          <div className="card-rating">
            <AiFillStar style={{ color: "yellow", marginRight: "5px" }} />
            <div>{mov.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
