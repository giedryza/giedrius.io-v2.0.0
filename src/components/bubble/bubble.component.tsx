import React from 'react';

import Icon, { IconName } from '../icon/icon.component';

interface Props {
  icon: IconName;
  label: string;
  link?: string;
  onClick?: () => void;
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Bubble: React.FC<Props> = ({
  icon,
  label,
  link,
  onClick,
  linkProps,
  buttonProps,
}) => {
  const bubble = () => (
    <div className="card">
      <Icon name={icon} />
      <span className="card__label">{label}</span>
    </div>
  );

  return link ? (
    <a
      className="card__wrapper"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      {...linkProps}
    >
      {bubble()}
    </a>
  ) : (
    <button
      className="card__wrapper"
      type="button"
      onClick={onClick}
      {...buttonProps}
    >
      {bubble()}
    </button>
  );
};

export default Bubble;
