import ImageLoader from '@/components/dom/ImageLoader/ImageLoader';
import classes from './page.module.scss';

import Content from '@/components/dom/Content/Content';
import projects from '@/data/projects';
import Link from 'next/link';
import Button from '@/components/dom/Button/Button';

const Page = () => {
  return (
    <Content>
      <h2 className={classes['heading']}>A small selection of the projects I worked on during my internship at Hoy</h2>
      <p className={classes['intro']}>
        I worked on these projects solely as a developer, we received finished designs from the designers and were
        tasked with building them.
      </p>
      {projects.map((project, i) => (
        <div key={i} className={classes['project-container']}>
          <div className={classes['project-text-container']}>
            <h3 className={classes['project-title']}>{project.title}</h3>
            <p className={classes['project-description']}>{project.description}</p>
          </div>
          <div className={classes['link-container']}>
            <Link href={project.link} target='_blank' rel='noopener noreferrer' className={classes['link']}>
              <ImageLoader
                src={project.image}
                alt={`Image of project: ${project.title}`}
                className={classes['project-img']}
              />
            </Link>
            <div className={classes['button-container']}>
              <Button icon='arrowUpRight' className={classes['button']}>
                See project
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Content>
  );
};

export default Page;
