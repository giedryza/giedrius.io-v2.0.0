import React from 'react';

export enum ArrowPosition {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

interface Props {
  title: string;
  label: string;
  sublabel: string;
  meta: string;
  arrowPosition: ArrowPosition;
}

const Legend: React.FC<Props> = ({
  title,
  label,
  sublabel,
  meta,
  arrowPosition,
}) => (
  <div className="legend" data-arrow={arrowPosition}>
    <h3 className="heading__md">{title}</h3>
    <div className="legend__hr" />
    <p className="body__lg">{label}</p>
    <p className="body__lg">{sublabel}</p>
    <p className="body__md">{meta}</p>
  </div>
);

export default Legend;
