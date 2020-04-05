import React from 'react';
import MyList from './MyList';
import MoviesByGenre from './MoviesByGenre';

const Listing = () => {
  return (
    <div>
      <MyList/>
      <MoviesByGenre/>
    </div>
  )
};

export default Listing;