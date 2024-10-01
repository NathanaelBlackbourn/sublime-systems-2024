import ImageLoader from '@/components/dom/ImageLoader/ImageLoader';
import classes from './page.module.scss';
import Content from '@/components/dom/Content/Content';
import HeroBlock from '@/components/dom/About/HeroBlock/HeroBlock';
import experience from '@/data/experience';
import ExperienceBlock from '@/components/dom/About/ExperienceBlock/ExperienceBlock';
import education from '@/data/education';
import EducationBlock from '@/components/dom/About/EducationBlock/EducationBlock';

const Page = () => {
  return (
    <Content>
      <HeroBlock />
      <h2 className={classes['heading']}>Experience</h2>
      {experience.map((item, i) => (
        <ExperienceBlock key={i} {...item} />
      ))}

      <h2 className={classes['heading']}>Education</h2>
      {education.map((item, i) => (
        <EducationBlock key={i} {...item} />
      ))}
    </Content>
  );
};

export default Page;
