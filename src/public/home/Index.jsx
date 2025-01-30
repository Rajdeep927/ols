import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      {/* Navbar Section */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
      </nav> */}

      {/* Header Section */}
      <header className="bg-primary text-white text-center p-4">
        <h1>Online Library</h1>
        <p>Your gateway to a world of knowledge</p>
      </header>

      {/* Search Bar Section */}
      <section className="container mt-4">
        <div className="row">
          <div className="col-12 text-center">
            <input
              type="text"
              className="form-control w-50 mx-auto"
              placeholder="Search for books, authors, genres..."
            />
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="container mt-5">
        <h2 className="text-center mb-4">Featured Books</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/9636171/harrypotter.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100"
                alt="Harry Potter"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Harry Potter</h5>
                <p className="card-text">A brief description of the book.</p>
                <Link to="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BMTg1ODEzZTEtZjQ2ZS00OWViLTk1ZjYtYmM3NDVlODA5ODlmXkEyXkFqcGc@._V1_.jpg"
                alt="Feluda"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Feluda</h5>
                <p className="card-text">A brief description of the book.</p>
                <Link to href="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://nityapublications.com/wp-content/uploads/2024/01/java-1.jpg"
                alt="Java"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Java</h5>
                <p className="card-text">A brief description of the book.</p>
                <Link to ="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/byomkesh.jpg"
                alt="Feluda"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Feluda</h5>
                <p className="card-text">A brief description of the book.</p>
                <Link to href="#" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center p-4 mt-5">
        <p>&copy; 2025 Online Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;


