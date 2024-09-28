import ImageLoader from '@/components/dom/ImageLoader/ImageLoader';
import classes from './page.module.scss';
import Content from '@/components/dom/Content/Content';
import HeroBlock from '@/components/dom/About/HeroBlock/HeroBlock';

const Page = () => {
  return (
    <Content>
      <HeroBlock />
    </Content>
  );
};

export default Page;
