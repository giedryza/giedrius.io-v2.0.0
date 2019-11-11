import React from 'react';

import '../../styles/global/normalize.css';
import '../../styles/index.scss';
import Skills from '../skills/skills.component';
import Experience from '../experience/experience.component';

const App: React.FC = () => {
  return (
    <div className="container">
      <Experience />
      <Skills />
    </div>
  );
};

export default App;
