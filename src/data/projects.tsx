import type { Project } from '../index.d';

export const projects: Project[] = [
  {
    title: 'Elof Hansson',
    image: '/images/projects/elof-hansson.png',
    description: `A marketing site for trade and real estate business Elof Hansson. Built with Next.js 14, Sanity, Tailwind, Framer Motion, ShadCN and more. Aside from building numerous components I devised a system for colour theming tied in with Tailwind and built a form builder component with ShadCN and React Hook Form which enables the customer to fully customise the contact form via Sanity.`,
    link: 'https://www.elofhansson.com/',
  },
  {
    title: 'Daftö',
    image: '/images/projects/dafto.png',
    description: `We built and brand new site for Daftö adventure holiday park. This was shortly after the release of Next.js 14 so during the project we developed new ways to work with server side rendering and revalidation tags tied into Sanity's webhooks.`,
    link: 'https://www.dafto.se/',
  },
  {
    title: 'Sankt Jörgen Park',
    image: '/images/projects/sankt-jorgen-park.png',
    description: `The first customer project I made major contributions to at Hoy. Built with Next.js 13 and the pages router. The project includes GSAP for animations which I used to develop parallax scrolling effects.`,
    link: 'https://www.sanktjorgenpark.se/',
  },
];
