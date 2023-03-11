import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/button.scss';

export const StyledButton = ({ text, to, onClick }) => {
  return (
    <button onClick={onClick}>
      <Link to={to} className='link-text'>
        {text}
      </Link>
    </button>
  );
};
