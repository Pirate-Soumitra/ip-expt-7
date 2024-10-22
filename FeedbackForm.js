// src/FeedbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css';
const FeedbackForm = ({ onSubmit }) => {
const [name, setName] = useState('');
const [comment, setComment] = useState('');
const [submitted, setSubmitted] = useState(false); 
const handleSubmit = (e) => {
e.preventDefault();
if (onSubmit) {
onSubmit({ name, comment });
}
setSubmitted(true); // Set to true after submission
};
return (
<div className="feedback-container">
{submitted ? (
<div className="thank-you-message">
<h2>Thank you for your feedback!</h2>
</div>
) : (
<form className="feedback-form" onSubmit={handleSubmit}>
<h1>User Feedback</h1> {/* Heading inside the container */}
<div className="form-group">
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Enter your name"
required
/>
</div>
<div className="form-group">
<label htmlFor="comment">Comment:</label>
<textarea
id="comment"
value={comment}
onChange={(e) => setComment(e.target.value)}
placeholder="Enter your comment"
required
/>
</div>
<button type="submit" className="submit-btn">Submit</button>
</form>
)}
</div>
);
};
export default FeedbackForm;