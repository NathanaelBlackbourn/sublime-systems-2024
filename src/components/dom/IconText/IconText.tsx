import React from 'react';
import classes from './IconText.module.scss';
import Icon from '../Icon/Icon';
import { IconName } from '@/index';

interface IIconTextProps {
  icon?: IconName;
  element?: 'span' | 'h1';
  children?: React.ReactNode;
  size?: 'body' | 'sm' | 'md';
  className?: string;
}

const IconText = ({ icon, children, element = 'span', size = 'sm', className }: IIconTextProps) => {
  return (
    <span className={`${classes['container']} ${classes[size]} ${className}`}>
      <span className={classes['icon-container']}>{!!icon && <Icon icon={icon} className={classes['icon']} />}</span>
      {React.createElement(element, { className: classes['text'] }, children)}
    </span>
  );
};

export default IconText;
