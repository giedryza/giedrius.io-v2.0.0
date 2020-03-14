import React from 'react';

import Icon, { IconName } from '../../components/icon/icon.component';
import Title from '../../components/title/title.component';

const Avatar: React.FC = () => (
  <section className="avatar section-container">
    <Title title="Giedrius" />
    <Icon name={IconName.Avatar} />
  </section>
);

export default Avatar;
