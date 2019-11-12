import React from 'react';

import Icon, { IconName } from '../icon/icon.component';
import Title from '../title/title.component';

const Avatar: React.FC = () => (
  <section className="avatar section-container">
    <Title title="Giedrius" />
    <Icon name={IconName.AVATAR} />
  </section>
);

export default Avatar;
