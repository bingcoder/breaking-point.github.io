import path from 'path';
import fs from 'fs';
import type { NavbarConfig } from '@vuepress/theme-default';

const navbar: NavbarConfig = [
  {
    text: 'εΊη‘π',
    children: [
      {
        text: 'Html',
        link: '/base/html',
      },
      {
        text: 'Css',
        link: '/base/css',
      },
      {
        text: 'Javascript',
        link: '/base/js',
      },
    ],
  },
  {
    text: 'ζ‘ζΆπ',
    children: [
      {
        text: 'React',
        link: '/frame/react',
      },
      {
        text: 'Vue',
        link: '/frame/vue',
      },
    ],
  },
  {
    text: 'ζε»Ίπ§',
    children: [
      {
        text: 'Webpack',
        link: '/build/webpack',
      },
    ],
  },
  {
    text: 'εΆδ»π‘',
    children: [
      {
        text: 'Git',
        link: '/other/git',
      },
    ],
  },
];

export { navbar };
