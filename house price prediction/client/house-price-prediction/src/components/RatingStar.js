import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [reviews, setReviews] = useState([]);

  // I want permananent save 
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (!name || !location) {
      alert("Name and Location are required!");
      return;
    }
    const newReview = { rating, feedback, name, email, location };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    setRating(0);
    setFeedback("");
    setName("");
    setEmail("");
    setLocation("");
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Rate This House</h2>
      <div className="d-flex justify-content-center align-items-center" style={{ gap: "10px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="mx-1" style={{ fontSize: "2.5rem", cursor: "pointer", transition: "color 0.3s ease-in-out" }}>
            <input
              type="radio"
              name="rating"
              value={star}
              checked={rating === star}
              onChange={() => handleRating(star)}
              style={{ display: "none" }}
            />
            <span 
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              style={{ 
                color: star <= (hover || rating) ? "gold" : "#ccc", 
                transform: hover === star ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.2s ease-in-out"
              }}
            >
              ★
            </span>
          </label>
        ))}
      </div>
      <p className="mt-3 text-primary fw-bold" style={{ fontSize: "1.2rem" }}>Current Rating: {rating} Stars</p>
      <input 
        type="text" 
        className="form-control mt-3" 
        placeholder="Your Name (Required)" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <input 
        type="email" 
        className="form-control mt-3" 
        placeholder="Your Email (Optional)" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="text" 
        className="form-control mt-3" 
        placeholder="Your Location (Required)" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        required
      />
      <textarea 
        className="form-control mt-3" 
        placeholder="Why do you like/dislike this house?" 
        value={feedback} 
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
      <div className="mt-4">
        <h4>All Reviews</h4>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="alert alert-secondary">
              <p><strong>Rating:</strong> {review.rating} Stars</p>
              <p><strong>Name:</strong> {review.name}</p>
              <p><strong>Email:</strong> {review.email || "Not provided"}</p>
              <p><strong>Location:</strong> {review.location}</p>
              <p><strong>Feedback:</strong> {review.feedback}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to rate!</p>
        )}
      </div>
    </div>
  );
};

export default StarRating;
