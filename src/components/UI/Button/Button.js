import React from 'react';

import './Button.css';

const Button = props => {
  return (
    // using props for adding css in button ------
    <button type={props.type} className={`button ${props.blurButton}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
