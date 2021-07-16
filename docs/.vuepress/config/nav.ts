import path from 'path';
import fs from 'fs';
import type { NavbarConfig } from '@vuepress/theme-default';

const navbar: NavbarConfig = [
  {
    text: '基础📖',
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
    text: '框架🚀',
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
    text: '构建🔧',
    children: [
      {
        text: 'Webpack',
        link: '/build/webpack',
      },
    ],
  },
  {
    text: '其他💡',
    children: [
      {
        text: 'Git',
        link: '/other/git',
      },
    ],
  },
];

export { navbar };
