import React from 'react';

import '../../styles/global/normalize.css';
import '../../styles/index.scss';
import Card from '../card/card.component';
import { IconName } from '../icon/icon.component';

const App: React.FC = () => {
  return (
    <div>
      <h1>react</h1>
      <Card icon={IconName.HTML} />
      <Card icon={IconName.CSS} />
      <Card icon={IconName.MONGO} />
      <Card icon={IconName.EXPRESS} />
      <Card icon={IconName.SASS} />
      <Card icon={IconName.JAVASCRIPT} />
      <Card icon={IconName.REACT} />
    </div>
  );
};

export default App;
