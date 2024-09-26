'use client';

import { useState } from 'react';
import classes from './Nav.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const [hovered, setHovered] = useState<HTMLAnchorElement | null>(null);

  const pages = ['About', 'Work'];

  const pathname = usePathname();

  return (
    <nav className={classes['nav']}>
      <div
        className={classes['hover-bg']}
        {...(hovered && {
          style: {
            width: hovered.offsetWidth,
            height: hovered.offsetHeight,
            left: hovered.offsetLeft,
          },
        })}
      />
      <ul className={classes['list']}>
        {pages.map((page, index) => (
          <li className={classes['item']} key={index}>
            <Link
              className={`${classes['link']} ${pathname === `/${page.toLowerCase()}` ? classes['active-link'] : ''}`}
              href={`/${page.toLowerCase()}`}
              onMouseEnter={(e) => setHovered(e.currentTarget)}
              onMouseLeave={() => setHovered(null)}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
