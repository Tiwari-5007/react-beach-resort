import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title='our rooms'>
        <Link className='btn-primary' to='/'>Return home</Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
