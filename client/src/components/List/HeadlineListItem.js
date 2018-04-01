import React from 'react';

export const HeadlineListItem = ({ children }) => {
  return (
    <div>
      <ul className="list-group-item">
        {children}
      </ul>
    </div>
  );
};
