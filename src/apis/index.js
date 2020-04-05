import http from 'services/http';
import localStorage from 'services/localStorage';

export const getGenres = () => {
  return http.get(`/genre/movie/list`);
};

export const getMoviesByGenre = ({ id, page = 1 }) => {
  return http.get(`/discover/movie?with_genres=${id}`);
};

export const addMovie = ({ movie }) => {
  return new Promise((resolve, reject) => {
    try {
      const movies = localStorage.get();
      if ( !movies.find(mov => mov.id === movie.id) ) {
        localStorage.add(movie);
      }
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export const getMyList = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(localStorage.get());
    } catch (err) {
      reject(err);
    }
  });
};

export const deleteMovie = ({ movieId }) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.remove(movieId);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};