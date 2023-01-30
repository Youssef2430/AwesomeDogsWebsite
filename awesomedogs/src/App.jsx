import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);

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
      alert("The rating must be 10 or higher.");
      return;
    }

    // Your code to store the image and rating goes here
    // ...

    // Load a new random dog picture
    setRating(0);
    fetchImage();
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: "#000000" }}>
      <div className="row h-100">
        <div className="col-md-6 mx-auto my-auto text-center">
          {image && (
            <img
              src={image}
              alt="Random Dog"
              className="img-fluid rounded"
              style={{ backgroundColor: "#fff" }}
            />
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 mx-auto text-center">
          <p style={{ color: "#fff" }}>Rate this dog:</p>
          <div style={{ display: "inline-block" }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(value => (
              <FontAwesomeIcon
                key={value}
                icon={faStar}
                onClick={() => setRating(value)}
                style={{
                  color: value <= rating ? "#ffc107" : "#ccc",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  padding: "0 5px"
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
  );
};

export default App;
