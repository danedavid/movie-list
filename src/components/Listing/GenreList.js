import React, { useEffect } from 'react';
import useSetState from '@danedavid/usesetstate';
import { Spinner } from 'evergreen-ui'
import ListLayout from './ListLayout';
import MovieCard from './MovieCard';
import Carousel from '@brainhubeu/react-carousel';
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

  const fetchGenreMovies = async () => {
    try {
      const { data } = await getMoviesByGenre({
        id: genre.id,
      });
      setMovies({ loading: false, list: data.results });
      console.log(data);
    } catch (err) {
      setMovies({ loading: false, error: true });
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGenreMovies();
  }, []);

  return (
    <ListLayout title={genre.name}>
      {
        movies.loading
        ? <Spinner/>
        : (
          movies.error
          ? 'Something went wrong'
          : (
            <Carousel
              slidesPerPage={5}
              arrows
            >
              {
                movies.list.map(movie => {
                  return (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                    />
                  )
                })
              }
            </Carousel>
          )
        )
      }
    </ListLayout>
  );
};

export default GenreList;