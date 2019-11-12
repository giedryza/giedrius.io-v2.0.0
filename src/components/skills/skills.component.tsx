import React from 'react';

import { skills } from './skills.data';
import Card from '../card/card.component';
import Title from '../title/title.component';

const Skills: React.FC = () => (
  <section className="skills section-container">
    <Title title="Skills" />

    <ul className="skills__container">
      {skills.map(skill => (
        <li key={skill.label}>
          <Card icon={skill.icon} label={skill.label} />
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
