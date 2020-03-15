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
    <div className="bubble">
      <Icon name={icon} />
      <span className="bubble__label">{label}</span>
    </div>
  );

  return link ? (
    <a
      className="bubble__wrapper"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      {...linkProps}
    >
      {bubble()}
    </a>
  ) : (
    <button
      className="bubble__wrapper"
      type="button"
      onClick={onClick}
      aria-label={label}
      {...buttonProps}
    >
      {bubble()}
    </button>
  );
};

export default Bubble;
