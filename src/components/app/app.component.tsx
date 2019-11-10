import React from 'react';

import '../../styles/global/normalize.css';
import '../../styles/index.scss';
import Card from '../card/card.component';
import Icon, { IconName } from '../icon/icon.component';

const App: React.FC = () => {
  return (
    <div>
      <h1>react</h1>
      <Card />
      <Icon name={IconName.FACEBOOK} />
    </div>
  );
};

export default App;
