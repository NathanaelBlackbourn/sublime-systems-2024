import htmlTunnel from '@/components/canvas/HtmlOutlet/HtmlTunnel';
import classes from './HomeTemplate.module.scss';
const HomeTemplate = () => {
  return (
    <htmlTunnel.In>
      <h1 className={classes['heading-main']}>
        <span className={classes['heading-upper']}>Nathanael Blackbourn</span>
        <span className={classes['heading-lower']}>Frontend Developer</span>
      </h1>
    </htmlTunnel.In>
  );
};

export default HomeTemplate;
