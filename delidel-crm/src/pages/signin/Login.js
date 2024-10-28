// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import config from './config.js';
import logo from '../assets/images/Logo.png'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.apiUrl}/login`, { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            if (rememberMe) {
                localStorage.setItem('username', username);
            } else {
                localStorage.removeItem('username');
            }
            setError('');
            navigate('/');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login">
            <form id="login-form" onSubmit={handleLogin}>
                <div className="roworangelogoth">
                    <div className="flex-col-center-center loginforgot">
                        <div className="logocrm">
                            <img src={logo} alt="LOGO" className="orangelogothree" />
                            <h1 className="crm ui heading size-headingxs">CRM</h1>
                        </div>
                        <div className="business">
                            <h2 className="letsget ui heading size-headings">Let's Get Started!</h2>
                            <p className="ui text size-textxs">Login to your account</p>
                        </div>
                        <div className="columnusername">
                            <div className="usernamepwd">
                                <div className="companyname">
                                    <p className="username ui text size-textxs">Email</p>
                                    <label className="username-1">
                                        <input
                                            className="form-control"
                                            placeholder="Enter Email"
                                            name="email"
                                            type="email"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="companyname">
                                    <p className="username ui text size-textxs">Password</p>
                                    <label className="password-1">
                                        <input
                                        className="form-control"
                                            name="password"
                                            placeholder="Enter your password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="forgotremeber">
                                <div className="rememberme">
                                    <label htmlFor="switch" className="switch-1">
                                        <input
                                            type="checkbox"
                                            name="switch"
                                            id="switch"
                                            aria-hidden="true"
                                            hidden
                                            checked={rememberMe}
                                            onChange={() => setRememberMe(!rememberMe)}
                                        />
                                        <span className="dhi-group">Remember me</span>
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className="forgot-password"
                                    onClick={() => {
                                        // Implement your forgot password logic
                                        console.log('Redirect to forgot password page or show modal');
                                    }}
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <input type="hidden" name="submitLogin" value="1" />
                            <button
                                id="submit-login"
                                className="flex-row-center-center login-1"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
