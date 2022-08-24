import React from "react";
import { settings } from "./Settings";
import Slider from "react-slick";
import uuid from "react-uuid";
import Card from "./Card";
import "./Row.css";

const Row = ({ heading, data, setFav, type, wishlist }) => {
  return (
    <div className="row">
      <div className="heading">{heading}</div>

      <div className="wrapper">
        <Slider {...settings}>
          {data.map((mov) => (
            <Card
              key={uuid()}
              mov={mov}
              setFav={setFav}
              type={type}
              wishlist={wishlist}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Row;
