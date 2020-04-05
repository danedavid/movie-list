import React, { useEffect, useContext } from 'react';
import useSetState from '@danedavid/usesetstate';
import AddMovieContext from 'utils/context';
import GenericList from './GenericList';
import '@brainhubeu/react-carousel/lib/style.css';
import { getMoviesByGenre } from 'apis';

const GenreList = ({
  genre,
}) => {
  const [movies, setMovies] = useSetState({
    list: [],
    error: false,
    loading: true,
  });
  const addMovie = useContext(AddMovieContext);

  const fetchGenreMovies = async () => {
    try {
      const { data } = await getMoviesByGenre({
        id: genre.id,
      });
      setMovies({ loading: false, list: data.results });
      // console.log(data);
    } catch (err) {
      setMovies({ loading: false, error: true });
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGenreMovies();
  }, []);

  return (
    <GenericList
      title={genre.name}
      loading={movies.loading}
      error={movies.error}
      list={movies.list}
      onCardClick={(movie) => addMovie(movie)}
    />
  );
};

export default GenreList;