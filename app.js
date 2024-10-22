// src/App.js
import React from 'react';
import FeedbackForm from './FeedbackForm';
function App() {
const handleFormSubmit = (data) => {
console.log('Feedback submitted:', data);
// Handle feedback data (e.g., send to server)
};
return (
<div>
<FeedbackForm onSubmit={handleFormSubmit} />
</div>
);
}
export default App