declare module '*.vert' {
  const content: string;
  export default content;
}

declare module '*.frag' {
  const content: string;
  export default content;
}

export type Experience = {
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type Education = {
  institution: string;
  location: string;
  qualification: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ImageMetaData = {
  width: number;
  height: number;
  aspectRatio: number;
};

export type IconName = 'arrowRight' | 'arrowUpRight' | 'briefcase' | 'download' | 'mapPin' | 'x';

export type Project = {
  title: string;
  image: string;
  description: string;
  link: string;
};
