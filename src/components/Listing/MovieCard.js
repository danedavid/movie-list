import React from 'react';
import trim from 'utils/trim';
import { Icon } from 'evergreen-ui';
import moment from 'moment';
import 'styles/MovieCard.css';

const MovieCard = ({
  movie,
}) => {
  // console.log(movie)
  return (
    <div className="card">
      <img
        className="poster"
        src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        alt="poster"
      />
      <div className="card-overlay">
        <div className="card-title">{trim(movie.title, 40)}</div>
        <div className="card-rating">
          <Icon icon="star" color="warning" />
          <span>{movie.vote_average}</span>
          &nbsp;&middot;
          <span>{moment(movie.release_date, 'YYYY-MM-DD').format('YYYY')}</span>
        </div>
        <div className="card-info">{trim(movie.overview)}</div>
      </div>
    </div>
  );
};

export default MovieCard;