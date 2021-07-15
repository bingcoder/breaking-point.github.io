import path from 'path';
import fs from 'fs';
import type {
  SidebarConfig,
  SidebarConfigArray,
} from '@vuepress/theme-default';

const sidebar: SidebarConfig = {};

function genSidebar(p, key = '') {
  const docs = fs.readdirSync(p);
  let children = [];
  docs.forEach((item) => {
    const stat = fs.statSync(path.join(p, item));
    if (['.vuepress', '.DS_Store', 'README.md'].includes(item)) return;
    if (stat.isDirectory()) {
      genSidebar(path.join(p, item), `${key}/${item}`);
    } else {
      if (key) {
        children.push(`${key}/${item}`);
      }
    }
  });
  children = children.sort((a, b) => {
    console.log(a);
    const aStat = fs.statSync(path.join(path.resolve('./', 'docs'), a));
    const bStat = fs.statSync(path.join(path.resolve('./', 'docs'), b));
    return aStat.birthtimeMs - bStat.birthtimeMs;
  });

  if (key && children.length) {
    const keys = key.split('/');
    (sidebar[key] as SidebarConfigArray) = [
      { text: keys[keys.length - 1].toUpperCase(), link: key, children },
    ];
  }
}

genSidebar(path.resolve('./', 'docs'));

export { sidebar };
