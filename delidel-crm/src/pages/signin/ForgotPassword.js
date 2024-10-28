// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import config from './config.js'; // Import the config file correctly
import axios from 'axios';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      // Use backticks for template literals
      const response = await axios.post(`${config.apiUrl}/forgot-password`, { username });
      setMessage(response.data.message);
    } catch (err) {
      setMessage('User not found');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
