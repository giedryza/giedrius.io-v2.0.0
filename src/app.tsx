import React from 'react';

import 'styles/global/normalize.css';
import 'styles/index.scss';
import Menu from 'components/menu/menu.component';
import Avatar from 'sections/avatar/avatar.component';
import Experience from 'sections/experience/experience.component';
import Skills from 'sections/skills/skills.component';
import Contacts from 'sections/contacts/contacts.component';

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
