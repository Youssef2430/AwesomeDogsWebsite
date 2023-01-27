import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DogImages.css';

function DogImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random/10')
      .then(res => {
        setImages(res.data.message);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="center-round-image">
        <img src={images[0]} alt="Dog" className="round-image" />
    </div>
  );
}

export default DogImages;
