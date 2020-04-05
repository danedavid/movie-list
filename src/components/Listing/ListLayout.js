import React from 'react';
import 'styles/ListLayout.css';

const ListLayout = ({
  children,
  title,
}) => {
  return (
    <div className="list-layout">
      <h3 className="list-title">{title}</h3>
      {children}
    </div>
  );
};

export default ListLayout;