import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const markdownDirectory = path.join(process.cwd(), 'public/markdowns/pt-br');

export const parseMarkdownDirectory = () => {
  return fs.readdirSync(markdownDirectory)
    .filter(file => fs.statSync(
      path.join(markdownDirectory, file)).isDirectory())
    .map(chapter => {
      const chapterPath = path.join(markdownDirectory, chapter);
      const sections = fs.readdirSync(chapterPath)
        .filter(file => file.endsWith('.md'))
        .map(file => {
          const { data } = matter(fs.readFileSync(path.join(chapterPath, file), 'utf8'));
          return file.replace('.md', '');
        });
      return { chapter, sections };
    })
};