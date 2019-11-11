import React from 'react';

import Hr from '../hr/hr.component';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return (
    <header className="title">
      <h2 className="title__label">{title}</h2>
      <Hr />
    </header>
  );
};

export default Title;
