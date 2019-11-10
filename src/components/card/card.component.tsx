import React from 'react';

import Icon, { IconName } from '../icon/icon.component';

interface Props {
  icon: IconName;
}

const Card: React.FC<Props> = ({ icon }) => {
  return (
    <div className="card">
      <Icon name={icon} />
      <span className="card__tooltip">Typescript</span>
    </div>
  );
};

export default Card;
