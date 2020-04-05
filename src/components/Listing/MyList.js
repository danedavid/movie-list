import React from 'react';
import GenericList from './GenericList';

const MyList = ({ movies, deleteMovie }) => {
  return (
    <GenericList
      title="My List"
      loading={movies.loading}
      error={movies.error}
      list={movies.list}
      onCardClick={movie => deleteMovie(movie)}
      showDeleteButton
    />
  )
};

export default MyList;