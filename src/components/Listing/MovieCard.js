import React from 'react';

const MovieCard = ({
  movie,
}) => {
  console.log(movie)
  return (
    <img
      src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
      alt="poster"
    />
  );
};

export default MovieCard;