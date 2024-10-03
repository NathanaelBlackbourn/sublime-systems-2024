import ImageLoader from '../../ImageLoader/ImageLoader';
import classes from './HeroBlock.module.scss';

const HeroBlock = () => {
  const description = `Originally from England, soon celebrating my tenth year living abroad. I like systems and aesthetics and am
          most at home in the code. Currently building sites as a freelancer while looking for a full-time position.`;

  return (
    <div className={classes['grid-block']}>
      <div className={classes['image-container']}>
        <ImageLoader
          src='/images/profile/IMG_9420_edit.jpg'
          alt='The owner of the site, Nathanael Blackbourn'
          sizes='400px'
        />
      </div>
      <div className={classes['text-container']}>
        <h2 className={classes['heading']}>Driven, receptive and independent junior frontend developer</h2>
        <p className={classes['description-lg']}>{description}</p>
      </div>
      <div className={classes['description-sm']}>{description}</div>
    </div>
  );
};

export default HeroBlock;
