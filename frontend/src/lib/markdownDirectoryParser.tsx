import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const markdownDirectory = path.join(process.cwd(), 'public/markdowns/pt-br');

export const parseMarkdownDirectory = () => {
  const chaptersData = fs.readdirSync(markdownDirectory)
    .filter(file => fs.statSync(path.join(markdownDirectory, file)).isDirectory())
    .map(chapter => {
      let chapterType, chapterNumber;
      if (chapter.startsWith('Anexo')) {
        chapterType = 2;
        chapterNumber = parseInt(chapter.replace('Anexo ', ''), 10) || 0;
      } else if (chapter.startsWith('Códex')) {
        chapterType = 3;
        chapterNumber = parseInt(chapter.replace('Códex ', ''), 10) || 0;
      } else {
        chapterType = 1;
        chapterNumber = parseInt(chapter.replace('Capítulo ', ''), 10) || 0;
      }

      const chapterPath = path.join(markdownDirectory, chapter);
      const sectionsData = fs.readdirSync(chapterPath)
        .filter(file => file.endsWith('.md'))
        .map(file => {
          const fullPath = path.join(chapterPath, file);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data } = matter(fileContents);
          return {
            name: file.replace('.md', ''),
            order: data.order || 0,
          };
        });

      sectionsData.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));

      return {
        chapter,
        chapterType,
        chapterNumber,
        sections: sectionsData.map(section => section.name),
      };
    });

  chaptersData.sort((a, b) => {
    if (a.chapterType === b.chapterType) {
      return a.chapterNumber - b.chapterNumber;
    } else {
      return a.chapterType - b.chapterType;
    }
  });

  return chaptersData.map(({ chapter, sections }) => ({ chapter, sections }));
};

