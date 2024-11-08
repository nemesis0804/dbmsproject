import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
        <img src='/Images/home.jpg'></img> 
          <h2>Welcome to Inventure Academy</h2>
          <p>Empowering the next generation of leaders through quality education.</p>
        </div>
      </section>

      {/* School Details Section */}
      <section className="school-details">
        <h3>About Our School</h3>
        <p>CMS Schools have been a beacon of academic excellence for over 50 years. We offer a diverse and inclusive environment for students to grow and thrive. Our campuses are equipped with state-of-the-art facilities, dedicated faculty, and a strong commitment to student success.</p>
      </section>
    </div>
  );
}

export default Home;
