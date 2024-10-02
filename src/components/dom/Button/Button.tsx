import { IconName } from '@/index';
import Icon from '../Icon/Icon';
import classes from './Button.module.scss';

import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: IconName;
  hasBackground?: boolean;
  element?: 'button' | 'a';
  href?: string;
}

const Button = ({
  children,
  className,
  onClick,
  icon,
  hasBackground = true,
  element = 'button',
  href,
}: IButtonProps) => {
  className = `${classes['container']} ${className}`;
  return React.createElement(
    element,
    element === 'button'
      ? {
          className,
          onClick,
        }
      : {
          className,
          href,
          target: '_blank',
          rel: 'noopener noreferrer',
        },
    <>
      {children}
      <span className={`${classes['form']} ${hasBackground ? classes['has-background'] : ''}`}>
        <span className={classes['icon-container']}>
          <Icon icon={icon} className={classes['icon']} />
        </span>
      </span>
    </>,
  );
};

export default Button;
