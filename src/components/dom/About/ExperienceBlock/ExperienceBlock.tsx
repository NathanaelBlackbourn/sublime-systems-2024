import { Experience } from '@/index';
import classes from './ExperienceBlock.module.scss';

const ExperienceBlock = ({ company, role, startDate, endDate, description }: Experience) => {
  return <div className={classes['grid-block']}></div>;
};

export default ExperienceBlock;
