import React from 'react';
import Icon, { IconName } from '../icon/icon.component';

export enum BubbleSize {
  Big = 'big',
  Small = 'small',
}

export enum LabelPosition {
  Top = 'top',
  Bottom = 'bottom',
}

interface Props {
  icon: IconName;
  label: string;
  link?: string;
  onClick?: () => void;
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  bubbleSize?: BubbleSize;
  labelPosition?: LabelPosition;
}

const Bubble: React.FC<Props> = ({
  icon,
  label,
  link,
  onClick,
  linkProps,
  buttonProps,
  bubbleSize = BubbleSize.Big,
  labelPosition = LabelPosition.Bottom,
}) => {
  const bubble = () => (
    <div className={`bubble ${bubbleSize}`}>
      <Icon name={icon} />
      <span className={`bubble__label ${labelPosition}`}>{label}</span>
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
