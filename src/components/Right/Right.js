import React from "react";
import Favorites from "./Favorites";
import InputArea from "./InputArea";

const Right = ({ wishlist, removeWish, type, getSearch }) => {
  return (
    <div className="right">
      <InputArea getSearch={getSearch} />
      <Favorites wishlist={wishlist} removeWish={removeWish} />
    </div>
  );
};

export default Right;
