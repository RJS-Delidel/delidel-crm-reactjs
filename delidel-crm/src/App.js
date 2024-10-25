// src/App.js
import './App.css';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./pages/login.css";

// This is the main entry point of the application
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
