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
    <div className="skills__container">
      <Title title="Skills" />

      {skills.map(skill => (
        <Card icon={skill.icon} label={skill.label} key={skill.label} />
      ))}
    </div>
  );
};

export default Skills;
