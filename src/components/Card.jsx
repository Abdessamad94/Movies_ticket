import React from "react";
import { Link } from "react-router-dom";
import Botton from "./style/Button";
import Item from "./style/Item";

export default function Card({ movie }) {
  return (
    <Item bg={movie.image}>
      <div>
        <div className="title">{movie.title}</div>
        <div className="price">{movie.price}</div>
      </div>
      <div className="book-btn">
        <Botton as={Link} to={`/Movie/${movie.id}`}>
          Booking
        </Botton>
      </div>
    </Item>
  );
}
