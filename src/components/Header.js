import React, { useEffect } from 'react';
import useSetState from '@danedavid/usesetstate';
import { Spinner } from 'evergreen-ui';
import { getPopularMovies } from 'apis';
import Carousel from '@brainhubeu/react-carousel';
import 'styles/Header.css';

const Header = () => {
  const [movies, setMovies] = useSetState({
    list: [],
    error: false,
    loading: true,
  });

  const fetchPopular = async () => {
    try {
      const { data } = await getPopularMovies();
      console.log(data)
      setMovies({ list: data.results, loading: false });
    } catch (err) {
      setMovies({ loading: false, error: true });
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="header-container">
      {
        movies.loading
          ? <Spinner/>
          : (
            movies.error
            ? 'Something went wrong'
            : (
              <>
                <div className="header-overlay overlay-left">
                  <div className="header-title">MovieList</div>
                </div>
                <Carousel
                  clickToChange
                  slidesPerPage={2}
                  autoPlay={3000}
                  animationSpeed={1000}
                  infinite
                >
                  {
                    movies.list.map(movie => {
                      return (
                        <div
                          key={movie.id}
                          className="header-banner"
                        >
                          <img
                            src={`http://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
                            alt="banner"
                          />
                        </div>
                      )
                    })
                  }
                </Carousel>
              </>
            )
          )
      }
    </div>
  );
};

export default Header;