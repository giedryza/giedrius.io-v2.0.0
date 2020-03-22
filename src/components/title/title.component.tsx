import React from 'react';
import Hr from 'components/hr/hr.component';

const LABEL_CLASS = 'title__label heading__lg';

interface Props {
  title: string;
  h1?: boolean;
}

const Title: React.FC<Props> = ({ title, h1 = false }) => (
  <header className="title">
    {h1 ? (
      <h1 className={LABEL_CLASS}>{title}</h1>
    ) : (
      <h2 className={LABEL_CLASS}>{title}</h2>
    )}
    <Hr />
  </header>
);

export default Title;
