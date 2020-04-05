import http from 'services/http';

export const getGenres = () => {
  return http.get(`/genre/movie/list`);
};

export const getMoviesByGenre = ({ id, page = 1 }) => {
  return http.get(`/discover/movie?with_genres=${id}`);
};