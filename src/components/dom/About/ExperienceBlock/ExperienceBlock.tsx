import { Experience } from '@/index';
import classes from './ExperienceBlock.module.scss';
import DatesContainer from '../DatesContainer/DatesContainer';

const ExperienceBlock = ({ company, role, startDate, endDate, description }: Experience) => {
  return (
    <div className={classes['grid-block']}>
      <DatesContainer startDate={startDate} endDate={endDate} />
      <h3 className={classes['heading']}>{company}</h3>
      <h3 className={classes['heading']}>{role}</h3>
      <p className={classes['description']}>{description}</p>
    </div>
  );
};

export default ExperienceBlock;
