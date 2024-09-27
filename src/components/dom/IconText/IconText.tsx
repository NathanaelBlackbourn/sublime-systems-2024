import React from 'react';
import classes from './IconText.module.scss';
import Icon from '../Icon/Icon';
import { IconName } from '@/index';

interface IIconTextProps {
  icon?: IconName;
  element?: 'span' | 'h1';
  children?: React.ReactNode;
}

const IconText = ({ icon, children, element = 'span' }: IIconTextProps) => {
  return (
    <span className={classes['container']}>
      <span className={classes['icon-container']}>{!!icon && <Icon icon={icon} className={classes['icon']} />}</span>
      {React.createElement(element, { className: classes['text'] }, children)}
    </span>
  );
};

export default IconText;
