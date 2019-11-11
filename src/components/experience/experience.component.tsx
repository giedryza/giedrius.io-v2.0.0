import React from 'react';
import { format, formatDistance } from 'date-fns';

import { isToday } from '../../utils/helpers';
import Title from '../title/title.component';
import Card from '../card/card.component';
import { IconName } from '../icon/icon.component';

const Experience: React.FC = () => {
  const experience = [
    {
      company: 'NFQ',
      web: 'https://www.nfq.lt',
      from: new Date(2019, 9, 14),
      to: new Date(),
      jobTitle: 'Frontend Developer',
      jobType: 'Full-time',
      icon: IconName.NFQ,
    },
    {
      company: 'Hometogo',
      web: 'https://www.hometogo.com',
      from: new Date(2019, 9, 14),
      to: new Date(),
      jobTitle: 'Frontend Developer',
      jobType: 'Full-time',
      icon: IconName.HOMETOGO,
    },
    {
      company: 'Mediapark',
      web: 'https://mediapark.lt',
      from: new Date(2019, 3, 8),
      to: new Date(2019, 9, 9),
      jobTitle: 'React Developer',
      jobType: 'Full-time',
      icon: IconName.MEDIAPARK,
    },
  ];

  return (
    <section className="experience">
      <Title title="Experience" />

      <ul className="experience__container">
        {experience.map(exp => (
          <li className="experience__list-item" key={exp.company}>
            <article className="experience__card">
              <a href={exp.web} target="_blank" rel="noopener noreferrer">
                <Card label={exp.company} icon={exp.icon} />
              </a>
              <div className="experience__data">
                <h3 className="heading__md">{exp.jobTitle}</h3>
                <p className="body__lg">
                  {format(exp.from, 'yyyy.MM')} &mdash;{' '}
                  {isToday(exp.to) ? 'present' : format(exp.to, 'yyyy.MM')}
                </p>
                <p className="body__lg">{formatDistance(exp.from, exp.to)}</p>
                <p className="body__md">{exp.jobType}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
