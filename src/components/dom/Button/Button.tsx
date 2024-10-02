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
}

const Button = ({ children, className, onClick, icon, hasBackground = true }: IButtonProps) => (
  <button className={`${classes['container']} ${className}`} onClick={onClick}>
    {children}
    <span className={`${classes['form']} ${hasBackground ? classes['has-background'] : ''}`}>
      <span className={classes['icon-container']}>
        <Icon icon={icon} className={classes['icon']} />
      </span>
    </span>
  </button>
);

export default Button;
