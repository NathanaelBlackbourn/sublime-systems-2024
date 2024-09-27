import ImageLoader from '@/components/dom/ImageLoader/ImageLoader';
import classes from './page.module.scss';

import Content from '@/components/dom/Content/Content';
import { projects } from '@/data/projects';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import Button from '@/components/dom/Button/Button';

const Page = () => {
  return (
    <Content>
      <h2 className={classes['heading']}>A small selection of the projects I worked on during my time at Hoy</h2>
      {projects.map((project, i) => (
        <div key={i} className={classes['project-container']}>
          <h3 className={classes['project-title']}>{project.title}</h3>
          <Link href={project.link} target='_blank' rel='noopener noreferrer' className={classes['link']}>
            <ImageLoader
              src={project.image}
              alt={`Image of project: ${project.title}`}
              className={classes['project-image']}
            />

            <div className={classes['button-container']}>
              <Button icon='arrowUpRight' isButton={false} className={classes['button']}>
                See project
              </Button>
            </div>
          </Link>
          <p className={classes['project-description']}>{project.description}</p>
        </div>
      ))}
    </Content>
  );
};

export default Page;
