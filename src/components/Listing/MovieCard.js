import React from 'react';
import classNames from 'classnames';
import trim from 'utils/trim';
import { Icon, IconButton } from 'evergreen-ui';
import moment from 'moment';
import 'styles/MovieCard.css';

const noop = () => {};

const MovieCard = ({
  movie,
  onCardClick = noop,
  showDeleteButton
}) => {
  return (
    <div
      className={classNames({
        "card": true,
        "clickable": !showDeleteButton,
      })}
      onClick={() => {
        if ( !showDeleteButton ) {
          onCardClick();
        }
      }}
    >
      {showDeleteButton && (<IconButton
        position="absolute"
        left="20px"
        top="20px"
        opacity="0"
        icon="trash"
        intent="danger"
        onClick={onCardClick}
      />)}
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