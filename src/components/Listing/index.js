import React, { useEffect, useCallback, useMemo } from 'react';
import useSetState from '@danedavid/usesetstate';
import {
  getMyList,
  addMovie as addMovieToStorage,
  deleteMovie as deleteMovieFromStorage,
} from 'apis';
import AddMovieContext from 'utils/context';
import MyList from './MyList';
import MoviesByGenre from './MoviesByGenre';

const Listing = () => {
  const [movies, setMovies] = useSetState({
    list: [],
    error: false,
    loading: true,
  });

  const fetchMovies = async () => {
    try {
      const list = await getMyList();
      console.log(list)
      setMovies({ loading: false, list });
    } catch (err) {
      setMovies({ loading: false, error: true });
      console.error(err);
    }
  };

  const addMovie = useCallback((movie) => {
    if ( !movies.list.find(mov => mov.id === movie.id) ) {
      addMovieToStorage({ movie });
      setMovies(prev => ({
        list: [...prev.list, movie],
      }));
    }
  }, [movies.list, setMovies]);

  const deleteMovie = (movie) => {
    deleteMovieFromStorage({ movieId: movie.id });
    setMovies(prev => ({
      list: prev.list.filter(mov => mov.id !== movie.id),
    }));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <MyList
        movies={movies}
        deleteMovie={deleteMovie}
      />
      <AddMovieContext.Provider value={addMovie}>
        <MoviesByGenre/>
      </AddMovieContext.Provider>
    </>
  )
};

export default Listing;