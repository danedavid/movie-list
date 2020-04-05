import React from 'react';
import Header from './Header';
import Listing from './Listing';
import 'styles/App.css';

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Listing/>
    </div>
  )
};

export default App;