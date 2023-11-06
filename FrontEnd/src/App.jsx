import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Your Name</a>
      </nav>
      <header className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src="profile.jpg" alt="Your Profile Picture" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-6">
            <h1>Your Name</h1>
            <p>Web Developer with 1 year of experience</p>
            <p>Passionate about creating web solutions.</p>
            {/* Add social media links here */}
          </div>
        </div>
      </header>
      <section className="container mt-4">
        <h2>About Me</h2>
        <p>
          Write a brief description of yourself and your experience as a web developer.
        </p>
      </section>
      <section className="container mt-4">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          {/* Add more skills */}
        </ul>
      </section>
      <section className="container mt-4">
        <h2>Projects</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Project 1</h5>
            <p className="card-text">Description of the project.</p>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Project 2</h5>
            <p className="card-text">Description of the project.</p>
          </div>
        </div>
        {/* Add more project cards */}
      </section>
      <footer className="text-center mt-4">
        <p>&copy; 2023 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
