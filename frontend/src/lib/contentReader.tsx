import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'public/markdowns/pt-br');

export const getContentStructure = () => {
  const chapters = fs.readdirSync(contentDirectory).filter(file => fs.statSync(path.join(contentDirectory, file)).isDirectory());

  const structuredContent = chapters.map(chapter => {
    const chapterPath = path.join(contentDirectory, chapter);
    const examples = fs.readdirSync(chapterPath).filter(file => file.endsWith('.md')).map(file => {
      const fullPath = path.join(chapterPath, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return file.replace('.md', '');
    });
    return { chapter, examples };
  });

  return structuredContent;
};