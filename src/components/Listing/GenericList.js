import React from 'react';
import { Spinner } from 'components/common';
import ListLayout from './ListLayout';
import MovieCard from './MovieCard';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import 'styles/GenericList.css';

const noop = () => {};

const GenericList = ({
  title,
  loading,
  error,
  list,
  onCardClick = noop,
  showDeleteButton = false,
}) => {
  return (
    <ListLayout title={title}>
      {
        loading
        ? <Spinner/>
        : (
          error
          ? 'Something went wrong'
          : (
              list.length === 0
                ? (
                  <div className="empty-container">
                    <h3 className="empty-message">
                      Nothing here! Scroll to discover more!
                    </h3>
                  </div>
                ) : (
                  <Carousel
                    slidesPerPage={5}
                    arrows
                  >
                    {
                      list.map(movie => {
                        return (
                          <MovieCard
                            onCardClick={() => onCardClick(movie)}
                            key={movie.id}
                            movie={movie}
                            showDeleteButton={showDeleteButton}
                          />
                        )
                      })
                    }
                  </Carousel>
                )
          )
        )
      }
    </ListLayout>
  );
};

export default GenericList;