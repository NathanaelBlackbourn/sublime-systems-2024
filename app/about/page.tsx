import ImageLoader from '@/components/dom/ImageLoader/ImageLoader';
import classes from './page.module.scss';
import Content from '@/components/dom/Content/Content';
import HeroBlock from '@/components/dom/About/HeroBlock/HeroBlock';
import experience from '@/data/experience';
import ExperienceBlock from '@/components/dom/About/ExperienceBlock/ExperienceBlock';

const Page = () => {
  return (
    <Content>
      <HeroBlock />
      <h2 className={classes['heading']}>Experience</h2>
      {experience.map((item, i) => (
        <ExperienceBlock key={i} {...item} />
      ))}
    </Content>
  );
};

export default Page;
