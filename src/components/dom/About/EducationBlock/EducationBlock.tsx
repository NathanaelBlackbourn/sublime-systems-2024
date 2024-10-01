import { Education } from '@/index';
import classes from './EducationBlock.module.scss';
import IconText from '../../IconText/IconText';
import DatesContainer from '../DatesContainer/DatesContainer';

const EducationBlock = ({ startDate, endDate, institution, location, qualification, description }: Education) => {
  return (
    <div className={classes['grid-block']}>
      <DatesContainer startDate={startDate} endDate={endDate} />

      <div className={classes['institution-container']}>
        <h3 className={classes['institution']}>{institution}</h3>
        <IconText icon={'mapPin'} size='body'>
          {location}
        </IconText>
      </div>

      <h3 className={classes['qualification']}>{qualification}</h3>

      <p className={classes['description']}>{description}</p>
    </div>
  );
};

export default EducationBlock;
