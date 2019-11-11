import React from 'react';

import Icon, { IconName } from '../icon/icon.component';

interface Props {
  icon: IconName;
  label: string;
}

const Card: React.FC<Props> = ({ icon, label }) => (
  <div className="card">
    <Icon name={icon} />
    <h4 className="card__label">{label}</h4>
  </div>
);

export default Card;
