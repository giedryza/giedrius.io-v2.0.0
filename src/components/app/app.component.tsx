import React from 'react';

import '../../styles/global/normalize.css';
import '../../styles/index.scss';
import Skills from '../skills/skills.component';

const App: React.FC = () => {
  return (
    <div className="container">
      <Skills />
    </div>
  );
};

export default App;
