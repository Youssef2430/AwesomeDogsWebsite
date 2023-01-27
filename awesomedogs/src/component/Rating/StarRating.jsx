import React, { useState } from 'react';
import './StarRating.css';

function StarRating({ image }) {
  const [rating, setRating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if(rating < 10 ) {
      alert('You must give the dog AT LEAST 10 stars!!');
      return;
    }
    console.log(`Image: ${image}, Rating: ${rating}`);
    // send data to the server
  }

  return (
    <div className='dog-rating'>
    <form onSubmit={handleSubmit}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value, index) => (
        <label key={index}>
          <input
            type="radio"
            name={image}
            value={value}
            checked={rating === value}
            onChange={() => setRating(value)}
          />
          <i className={`fa fa-star ${rating >= value ? 'checked' : ''}`} />
        </label>
      ))}
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default StarRating;
