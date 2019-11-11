import React from 'react';

import { IconName } from '../icon/icon.component';
import Card from '../card/card.component';
import Title from '../title/title.component';

const Skills: React.FC = () => {
  const skills = [
    { label: 'Javascript', icon: IconName.JAVASCRIPT },
    { label: 'React', icon: IconName.REACT },
    { label: 'Redux', icon: IconName.REDUX },
    { label: 'Typescript', icon: IconName.TYPESCRIPT },
    { label: 'Html', icon: IconName.HTML },
    { label: 'Css', icon: IconName.CSS },
    { label: 'Sass', icon: IconName.SASS },
    { label: 'Gatsby', icon: IconName.GATSBY },
    { label: 'Node', icon: IconName.NODE },
    { label: 'Express', icon: IconName.EXPRESS },
    { label: 'MongoDB', icon: IconName.MONGO },
  ];

  return (
    <section className="skills">
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
};

export default Skills;
