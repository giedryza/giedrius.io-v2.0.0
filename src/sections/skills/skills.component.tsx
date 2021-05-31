import React from 'react';
import { skills } from 'sections/skills/skills.data';
import Bubble from 'components/bubble/bubble.component';
import Title from 'components/title/title.component';

const Skills: React.FC = () => (
  <section className="skills">
    <Title title="Tech" />

    <ul className="skills__container">
      {skills.map((skill) => (
        <li key={skill.label}>
          <Bubble icon={skill.icon} label={skill.label} />
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
