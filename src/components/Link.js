import React from 'react';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <button style={{
      "backgroundColor": "rgb(228, 97, 97)"
      }}>{children}</button>
  };

  return (
    <button
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </button>
  );
};

export default Link;
