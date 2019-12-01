import React from 'react';

interface Props {
  popup: string;
}

const Tooltip: React.FC<Props> = ({ children, popup }) => (
  <div className="tooltip">
    <span role="tooltip">{popup}</span>
    {children}
  </div>
);

export default Tooltip;
