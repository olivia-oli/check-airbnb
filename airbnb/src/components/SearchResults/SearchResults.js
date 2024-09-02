import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./SearchResults.css";

const searchResults = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="search-result">
      <img src={img} alt={title} />
      <FavoriteBorderIcon className="fav-icon" />
      <div className="search-result-info-top">
        <div className="search-result-info-top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="search-result-info-buttom">
          <div className="search-result-stars">
            <p>{star}</p>
          </div>
          <div className="search-result-price">
            <h2>{price}</h2>
            <p className="price-total">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchResults;
