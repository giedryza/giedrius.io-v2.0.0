import React from 'react';

export enum Position {
  TOP = '--top',
  BOTTOM = '--bottom',
}

interface Props {
  popup: string;
  position: Position;
}

const Tooltip: React.FC<Props> = ({ children, popup, position }) => (
  <div className="tooltip">
    <span className={position} role="tooltip">
      {popup}
    </span>
    {children}
  </div>
);

export default Tooltip;
