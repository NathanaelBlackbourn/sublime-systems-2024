import type { Project } from '../index.d';

const projects: Project[] = [
  {
    title: 'Elof Hansson',
    image: '/images/projects/elof-hansson.png',
    description: `A marketing site for trade and real estate business Elof Hansson built with Next.js 14, Sanity, Tailwind, Framer Motion, ShadCN and more. Aside from building numerous components I devised a system for colour theming tied in with Tailwind. I also built a form builder component with ShadCN and React Hook Form which enables the customer to fully customise the contact form via Sanity.`,
    link: 'https://www.elofhansson.com/',
  },
  {
    title: 'Daftö',
    image: '/images/projects/dafto.png',
    description: `We built a brand new site for Daftö adventure holiday park. This was shortly after the release of Next.js 14 so during the project we developed new ways to work with server side rendering and revalidation tags tied into Sanity's webhooks.`,
    link: 'https://www.dafto.se/',
  },
  {
    title: 'Sankt Jörgen Park',
    image: '/images/projects/sankt-jorgen-park.png',
    description: `The first customer project I made major contributions to at Hoy. Built with Next.js 13 and the pages router. The project includes GSAP for animations which I used to develop the parallax image frames.`,
    link: 'https://www.sanktjorgenpark.se/',
  },
];

export default projects;
