import React from 'react';
import classes from './IconText.module.scss';
import { ArrowRight, ArrowUpRight, Briefcase, DownloadSimple, MapPin, X } from '@phosphor-icons/react';

interface IIconTextProps {
  icon?: 'arrowRight' | 'arrowUpRight' | 'briefcase' | 'download' | 'mapPin' | 'x';
  element?: 'span' | 'h1';
  children?: React.ReactNode;
}

const IconText = ({ icon, children, element = 'span' }: IIconTextProps) => {
  const iconMap = {
    arrowRight: <ArrowRight className={classes['icon']} />,
    arrowUpRight: <ArrowUpRight className={classes['icon']} />,
    briefcase: <Briefcase className={classes['icon']} />,
    download: <DownloadSimple className={classes['icon']} />,
    mapPin: <MapPin className={classes['icon']} />,
    x: <X className={classes['icon']} />,
  };

  return (
    <span className={classes['container']}>
      <span className={classes['icon-container']}>{iconMap[icon] || null}</span>
      {React.createElement(element, { className: classes['text'] }, children)}
    </span>
  );
};

export default IconText;
