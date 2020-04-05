import React from 'react';
import { Spinner, Pane } from 'evergreen-ui';

const CustomSpinner = () => {
  return (
    <Pane display="flex" alignItems="center" justifyContent="center" height="280px">
      <Spinner />
    </Pane>
  );
};

export default CustomSpinner;