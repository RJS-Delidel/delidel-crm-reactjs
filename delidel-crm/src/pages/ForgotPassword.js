// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgot-password', { username });
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
