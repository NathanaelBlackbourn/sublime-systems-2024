import Link from 'next/link';
import classes from './Content.module.scss';
import { X } from '@phosphor-icons/react/dist/ssr';

interface IContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  return (
    <div className={classes['container']}>
      <Link href='/' className={classes['close']}>
        <X />
      </Link>
      <div className={classes['content-area']}>{children}</div>
    </div>
  );
};

export default Content;
