import React from 'react';
import { format, formatDistanceStrict } from 'date-fns';
import { isToday, isEven } from '../../utils/helpers';
import { experience } from './experience.data';
import Title from '../title/title.component';
import Card from '../card/card.component';
import Legend, { ArrowPosition } from '../legend/legend.component';
import { useWindowWidth } from '../../utils/useWindowWidth';
import { DATE_FORMAT, BP_SM } from './experience.constants';

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

  const width = useWindowWidth();

  const getArrowPosition = (index: number) =>
    width > BP_SM
      ? isEven(index)
        ? ArrowPosition.Right
        : ArrowPosition.Left
      : ArrowPosition.Left;

  return (
    <section className="experience section-container">
      <Title title="Experience" />

      <ul className="experience__container">
        {experience.map((exp, i) => (
          <li className="experience__list-item" key={exp.company}>
            <article className="experience__card">
              <Card label={exp.company} icon={exp.icon} link={exp.web} />
              <Legend
                title={exp.jobTitle}
                label={getLabel(exp.from, exp.to)}
                sublabel={getSublabel(exp.from, exp.to)}
                meta={exp.jobType}
                arrowPosition={getArrowPosition(i)}
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
