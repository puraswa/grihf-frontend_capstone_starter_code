import React, { useState } from 'react';

const ReviewForm = () => {
  // State variables to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });
  const [showForm, setShowForm] = useState(false); // To control form visibility
  const [submittedMessage, setSubmittedMessage] = useState(''); // To display submitted message
  const [showWarning, setShowWarning] = useState(false); // To show warning if fields are incomplete

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      // Logic to handle the submitted review and rating
      console.log('Review submitted:', formData);
      setSubmittedMessage(
        `Thank you, ${formData.name}! Your review "${formData.review}" with a rating of ${formData.rating} has been submitted.`
      );
      setShowWarning(false); // Hide warning

      // Reset form fields after submission
      setFormData({
        name: '',
        review: '',
        rating: 0,
      });
    } else {
      // Show warning if fields are incomplete
      setShowWarning(true);
    }
  };

  // Function to handle button click to open the form
  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h2>Review Form</h2>
      {!showForm ? (
        // Display button to open the form
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        // Display form for giving feedback
        <form onSubmit={handleSubmit}>
          <h3>Give Your Feedback</h3>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;