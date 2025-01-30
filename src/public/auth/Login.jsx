import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes and update the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Check if fields are filled
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Get the stored user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Validate the login
    if (storedUserData) {
      if (storedUserData.email === email && storedUserData.password === password) {
        setSuccessMessage('Login successful!');
        navigate("/indexs")
        setError('');
      } else {
        setError('Invalid email or password.');
        setSuccessMessage('');
      }
    } else {
      setError('No user found. Please register first.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login to Online Library</h2>

      {/* Display error message */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Display success message */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email} /*e.target.value*/
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>

      <div className="mt-3 text-center">
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
