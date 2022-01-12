import './Card.css';

import React from 'react';

const Card = (props) => {
  const classList = 'card ' + props.className;

  return <div className={classList}>{props.children}</div>;
};

export default Card;
