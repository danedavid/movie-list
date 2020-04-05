import React, {
  useEffect,
  useState
} from 'react';
import { getGenres } from 'apis';
import { Spinner } from 'components/common';
import GenreList from './GenreList';

const MoviesByGenre = () => {
  const [genres, setGenres] = useState({
    loading: true,
    error: false,
    data: [],
  });

  const fetchGenres = async () => {
    try {
      const { data } = await getGenres();
      setGenres({
        loading: false,
        error: false,
        data: data.genres,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div>
      {
        genres.loading
        ? (
          <Spinner/>
        ) : (
          genres.error
          ? (
            <div>Something went wrong</div>
          ) : (
            <div>
              {genres.data.map((genre) => {
                return (
                  <GenreList
                    genre={genre}
                    key={genre.id}
                  />
                );
              })}
            </div>
          )
        )
      }
    </div>
  )
};

export default MoviesByGenre;