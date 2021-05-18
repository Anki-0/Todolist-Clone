import React from 'react';

export const Backdrop = (props) => {
  return props.show ? <div className="Backdrop">{props.children}</div> : null;
};
