import React from 'react';
import { format, formatDistanceStrict } from 'date-fns';
import { isToday } from '../../utils/helpers';
import { experience } from './experience.data';
import Title from '../../components/title/title.component';
import Bubble from '../../components/bubble/bubble.component';
import Legend from '../../components/legend/legend.component';
import { DATE_FORMAT } from './experience.constants';

const Experience: React.FC = () => {
  const getLabel = (from: Date, to: Date) =>
    `${format(from, DATE_FORMAT)} — ${
      isToday(to) ? 'present' : format(to, DATE_FORMAT)
    }`;

  const getSublabel = (from: Date, to: Date) =>
    `${formatDistanceStrict(from, to, {
      unit: 'month',
      roundingMethod: 'ceil',
    })}`;

  return (
    <section className="experience">
      <Title title="Experience" />

      <ul>
        {experience.map(exp => (
          <li className="experience__list-item" key={exp.company}>
            <div className="experience__placeholder" />
            <article className="experience__card">
              <Bubble label={exp.company} icon={exp.icon} link={exp.web} />
              <Legend
                title={exp.jobTitle}
                label={getLabel(exp.from, exp.to)}
                sublabel={getSublabel(exp.from, exp.to)}
                meta={exp.jobType}
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
