import { IconName } from '@/index';
import Icon from '../Icon/Icon';
import classes from './Button.module.scss';

import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  isButton?: boolean;
  className?: string;
  onClick?: () => void;
  icon?: IconName;
  hasBackground?: boolean;
}

const Button = ({ children, isButton = true, className, onClick, icon, hasBackground = true }: IButtonProps) => {
  return React.createElement(
    isButton ? 'button' : 'span',
    {
      className: `${classes['container']} ${className}`,
      onClick,
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
