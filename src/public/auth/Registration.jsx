import React, { useState } from 'react';

const Registration = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes and update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Save to localStorage
    const userData = { username, email, password };
    localStorage.setItem('userData', JSON.stringify(userData));

    setError('');
    setSuccessMessage('Registration successful! You are now registered.');

    // Clear form data after successful registration
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register for Online Library</h2>

      {/* Display error message */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Display success message */}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      {/* Registration Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
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

        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>

      <div className="mt-3 text-center">
        <p>
          Already have an account? <a href="/">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
