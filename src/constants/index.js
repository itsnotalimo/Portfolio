import {
  frontend,
  backend,
  ux,
  prototyping,
  discord,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  lua,
  graphql,
  siji,
  tod,
  rb,
  roblox,
  dcc,
  kelhel,
  microverse,
  deadzone,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI Development',
    icon: ux,
  },
  {
    title: 'Discord Integration',
    icon: discord,
  },
];

const technologies = [
  {
    name: 'lua',
    icon: lua,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Nothing But Net',
    company_name: 'ROBLOX',
    icon: roblox,
    iconBg: '#333333',
    date: 'Oct 2021 - Feb 2022',
  },
  {
    title: 'Tower Of Colors',
    company_name: 'ROBLOX',
    icon: roblox,
    iconBg: '#333333',
    date: 'Feb 2022 - Apr 2022',
  },
  {
    title: 'RO-BASKETBALL',
    company_name: 'ROBLOX',
    icon: roblox,
    iconBg: '#333333',
    date: 'Jan 2023 - Now',
  },
  {
    title: 'Tru Or Die',
    company_name: 'ROBLOX',
    icon: roblox,
    iconBg: '#333333',
    date: 'Apr 2023 - Now',
  },
  {
    title: 'Siji',
    company_name: 'ROBLOX',
    icon: roblox,
    iconBg: '#333333',
    date: 'Jan 2024 - Now',
  },
  {
    title: 'Deadzone',
    company_name: 'ROBLOX',
    icon: roblox,
    iconBg: '#333333',
    date: 'Aug 2024 - Now',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Siji',
    description: 'One of my horror projects, unreleased but will be releasing soon!',
    tags: [
      {
        name: 'lua',
        color: 'blue-text-gradient',
      },
    ],
    image: siji,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://streamable.com/hl2dzh',
  },
  {
    id: 'project-2',
    name: 'RO-BASKETBALL',
    description: 'One of my basketball projects. Was released until taken down by ROBLOX for NIKE copyright issues. Releasing again soon.',
    tags: [
      {
        name: 'lua',
        color: 'blue-text-gradient',
      },
    ],
    image: rb,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://streamable.com/2c6n00',
  },
  {
    id: 'project-3',
    name: 'Deadzone',
    description: 'One of my post apocalyptic survival games. Unreleased and release date unknown.',
    tags: [
      {
        name: 'lua',
        color: 'blue-text-gradient',
      },
    ],
    image: deadzone,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://streamable.com/jk5s6v',
  },
  {
    id: 'project-4',
    name: 'Tru Or Die',
    description: 'One of my roleplay projects. Unreleased but has been in development for a long time and is planned to release soon.',
    tags: [
      {
        name: 'lua',
        color: 'blue-text-gradient',
      },
    ],
    image: tod,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://streamable.com/71k3l1',
  },
];

export { services, technologies, experiences, projects };
