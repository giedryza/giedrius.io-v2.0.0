import React from 'react';

import '../../styles/global/normalize.css';
import '../../styles/index.scss';
import Menu from '../../components/menu/menu.component';
import Avatar from '../avatar/avatar.component';
import Experience from '../experience/experience.component';
import Skills from '../skills/skills.component';
import Contacts from '../contacts/contacts.component';

const App: React.FC = () => (
  <>
    <Menu />
    <main className="container">
      <Avatar />
      <Experience />
      <Skills />
      <Contacts />
    </main>
  </>
);

export default App;
