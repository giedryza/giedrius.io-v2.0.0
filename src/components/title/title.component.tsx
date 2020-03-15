import React from 'react';

import Hr from '../hr/hr.component';

interface Props {
  title: string;
  h1?: boolean;
}

const Title: React.FC<Props> = ({ title, h1 = false }) => (
  <header className="title">
    {h1 ? (
      <h1 className="title__label heading__lg">{title}</h1>
    ) : (
      <h2 className="title__label heading__lg">{title}</h2>
    )}
    <Hr />
  </header>
);

export default Title;
