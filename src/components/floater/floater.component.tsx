import React from 'react';

export enum Position {
  TOP,
  BOTTOM,
}

interface Props {
  position: Position;
}

const Floater: React.FC<Props> = ({ children, position }) => {
  const getPosition = (pos: Position) => {
    switch (pos) {
      case Position.TOP:
        return { top: 0 };
      case Position.BOTTOM:
        return { bottom: 0 };
      default:
        return {};
    }
  };

  const styles = getPosition(position);

  return (
    <div className="floating-container container" style={styles}>
      {children}
    </div>
  );
};

export default Floater;
