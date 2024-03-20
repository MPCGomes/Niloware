import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'public/markdowns/pt-br');

export const getContentStructure = () => {
  return fs.readdirSync(contentDirectory)
    .filter(file => fs.statSync(
      path.join(contentDirectory, file)).isDirectory())
    .map(chapter => {
      const chapterPath = path.join(contentDirectory, chapter);
      const sections = fs.readdirSync(chapterPath)
        .filter(file => file.endsWith('.md'))
        .map(file => {
          const { data } = matter(fs.readFileSync(path.join(chapterPath, file), 'utf8'));
          return file.replace('.md', '');
        });
      return { chapter, sections };
    })
};