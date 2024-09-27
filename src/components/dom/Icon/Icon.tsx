import { IconName } from '@/index';
import { ArrowRight, ArrowUpRight, Briefcase, DownloadSimple, MapPin, X } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

interface IIconProps {
  icon: IconName;
  className?: string;
}

const Icon = ({ icon, className }: IIconProps) => {
  const iconMap = {
    arrowRight: <ArrowRight />,
    arrowUpRight: <ArrowUpRight />,
    briefcase: <Briefcase />,
    download: <DownloadSimple />,
    mapPin: <MapPin />,
    x: <X />,
  };

  const IconComponent = iconMap[icon];

  return React.cloneElement(IconComponent, { className });
};

export default Icon;
