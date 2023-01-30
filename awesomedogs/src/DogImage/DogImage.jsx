import React, { useState, useEffect } from "react";
import RatingsList from "../RatingList/RatingList";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./DogImage.css";

const DogImage = () => {
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => setImage(data.message));
  };

  const handleSubmit = () => {
    if (rating < 10) {
      alert("HOW DARE YOU !!! The rating must be 10 or higher..THESE ARE DOGS NOT CATS !!!");
      return;
    }

    setRatings([...ratings, { image, rating }]);
    setRating(0);
    fetchImage();

  };

  return (
    <>
    <div className="container mt-5" style={{ backgroundColor: "#000000" }}>
      <div className="row h-100">
        <div className="col-md-6 mx-auto my-auto text-center">
          {image && (
            <img
              src={image}
              alt="Random Dog"
              className="img-fluid rounded dog-image"
            />
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 mx-auto text-center">
          <p style={{ color: "#fff" }}>Rate this dog:</p>
          <div style={{ display: "inline-block"}}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(value => (
              <FontAwesomeIcon
                key={value}
                icon={faStar}
                onClick={() => setRating(value)}
                style={{
                  color: value <= rating ? "#ffc107" : "#ccc",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  padding: "3px"
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 mx-auto text-center">
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={rating === 0}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <RatingsList ratings={ratings} />
    </>
  );
};

export default DogImage;
