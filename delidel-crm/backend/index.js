// backend/index.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_jwt_secret_key';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory user data for demonstration
const users = [
  {
    id: 1,
    username: 'user1',
    password: bcrypt.hashSync('password123', 8), // password is hashed
  },
];

// Route for login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Route for forgot password (simplified for this example)
app.post('/forgot-password', (req, res) => {
  const { username } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // In a real application, you would send an email to reset the password
  res.json({ message: 'Password reset link sent to your email' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
