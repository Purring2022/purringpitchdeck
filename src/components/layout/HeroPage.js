import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  return (
    <Fragment>
      <section className='text-box' id='text-box'>
        <h1>
          Purring <span style={{ color: '#f44336' }}>Pitch Deck</span>
        </h1>
        <p>
          We are one of the best brands that brings your digital dreams to
          exciting realities.
        </p>
        <Link to='/Services' className='hero-btn' id='hero-btn'>
          Access Our Pitch
        </Link>
      </section>
    </Fragment>
  );
};

export default HeroPage;
