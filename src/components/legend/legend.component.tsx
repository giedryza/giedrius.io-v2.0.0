import React from 'react';

interface Props {
  title: string;
  label: string;
  sublabel: string;
  meta: string;
}

const Legend: React.FC<Props> = ({ title, label, sublabel, meta }) => (
  <div className="legend">
    <h3 className="heading__md">{title}</h3>
    <div className="legend__hr" />
    <p className="body__lg">{label}</p>
    <p className="body__lg">{sublabel}</p>
    <p className="body__md">{meta}</p>
  </div>
);

export default Legend;
