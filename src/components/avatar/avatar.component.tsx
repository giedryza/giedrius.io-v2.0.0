import React from 'react';

import Icon, { IconName } from '../icon/icon.component';
import Title from '../title/title.component';

const Avatar: React.FC = () => {
  return (
    <section className="avatar section-container">
      <Title title="Giedrius" />
      <Icon name={IconName.AVATAR} />
    </section>
  );
};

export default Avatar;
