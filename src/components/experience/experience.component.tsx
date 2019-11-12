import React from 'react';
import { format, formatDistanceStrict } from 'date-fns';

import { isToday } from '../../utils/helpers';
import { experience } from './experience.data';
import Title from '../title/title.component';
import Card from '../card/card.component';

const Experience: React.FC = () => (
  <section className="experience section-container">
    <Title title="Experience" />

    <ul className="experience__container">
      {experience.map(exp => (
        <li className="experience__list-item" key={exp.company}>
          <article className="experience__card">
            <a
              href={exp.web}
              className="experience__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card label={exp.company} icon={exp.icon} />
            </a>
            <div className="experience__data">
              <h3 className="heading__md">{exp.jobTitle}</h3>
              <p className="body__lg">
                {format(exp.from, 'yyyy.MM')} &mdash;{' '}
                {isToday(exp.to) ? 'present' : format(exp.to, 'yyyy.MM')}
              </p>
              <p className="body__lg">
                {formatDistanceStrict(exp.from, exp.to, {
                  unit: 'month',
                  roundingMethod: 'ceil',
                })}
              </p>
              <p className="body__md">{exp.jobType}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
