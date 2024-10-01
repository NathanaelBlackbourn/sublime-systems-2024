import { Experience } from '@/index';
import classes from './ExperienceBlock.module.scss';

const ExperienceBlock = ({ company, role, startDate, endDate, description }: Experience) => {
  return (
    <div className={classes['grid-block']}>
      <div className={classes['dates-container']}>
        <p className={classes['dates']}>{`${startDate} ⇒ ${endDate}`}</p>
      </div>
      <h3 className={classes['company']}>{company}</h3>
      <h3 className={classes['role']}>{role}</h3>
      <p className={classes['description']}>{description}</p>
    </div>
  );
};

export default ExperienceBlock;
