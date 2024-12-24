import React, { useState } from 'react';

const ReviewForm = () => {
  // State variables to manage form inputs
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle the submitted review and rating
    console.log('Review submitted:', review);
    console.log('Rating submitted:', rating);
    // Reset form fields after submission
    setReview('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min="1"
          max="5"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;