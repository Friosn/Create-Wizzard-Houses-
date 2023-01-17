import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="entry">
      <h2>Wizzards and company's entry: 🆓</h2>
      <h3>
        Non-Magical beings entry fee: <span className="oneSoul">ONE SOUL</span>
      </h3>
      <Link to="generate">Constitute a House</Link>
    </div>
  );
};

export default Home;
