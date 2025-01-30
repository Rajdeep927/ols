import React from 'react';


const Title = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="container">
          <Link className="navbar-brand" to="/">Online Library</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <header
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: 'url(https://www.indiafilings.com/learn/wp-content/uploads/2019/05/Digital-Library-of-India.jpg)', // Replace with your image URL
          backgroundSize: 'cover',
          height: '100vh',
          backgroundPosition: 'center'
        }}
      >
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="container position-relative z-index-10">
          <h1 className="display-4 fw-bold">Welcome to the Online Library</h1>
          <p className="lead">Explore a world of knowledge at your fingertips</p>
        </div>
      </header>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center p-4 mt-5">
        <p>&copy; 2025 Online Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Title;
