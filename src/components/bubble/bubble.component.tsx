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
  transparent?: boolean;
  bubbleSize?: BubbleSize;
  labelPosition?: LabelPosition;
}

const BubbleButton: React.FC<Props> = ({
  icon,
  label,
  link,
  onClick,
  linkProps,
  buttonProps,
  transparent = false,
  bubbleSize = BubbleSize.Big,
  labelPosition = LabelPosition.Bottom,
}) => {
  const bubbleClassNames = [
    'bubble',
    bubbleSize,
    transparent ? 'transparent' : '',
  ]
    .join(' ')
    .trim();

  const labelClassNames = ['bubble__label', labelPosition].join(' ').trim();

  const Bubble = (
    <div className={bubbleClassNames}>
      <Icon name={icon} />
      <span className={labelClassNames}>{label}</span>
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
      {Bubble}
    </a>
  ) : (
    <button
      className="bubble__wrapper"
      type="button"
      onClick={onClick}
      aria-label={label}
      {...buttonProps}
    >
      {Bubble}
    </button>
  );
};

export default BubbleButton;
