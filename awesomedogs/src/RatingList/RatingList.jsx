import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RatingList.css";

const RatingsList = ({ ratings = [] }) => (
    <div>
    <div className="history-title">History</div>
    <ul className="rating-list">
      {ratings.map((rating, index) => (
        <li key={index} className="rating-item">
          <img src={rating.image} alt={`Dog-${index}`} className="rating-img" />
          <div className="rating-info">
            <p className="rating-value">Rating: {rating.rating}</p>
          </div>
        </li>
      ))}
    </ul>
    </div>
);

export default RatingsList;
