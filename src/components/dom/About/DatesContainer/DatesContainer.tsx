import classes from './DatesContainer.module.scss';

interface IDatesContainerProps {
  startDate: string;
  endDate: string;
}

const DatesContainer = ({ startDate, endDate }: IDatesContainerProps) => {
  return (
    <div className={classes['dates-container']}>
      <p className={classes['dates']}>{`${startDate} ⇒ ${endDate}`}</p>
    </div>
  );
};

export default DatesContainer;
