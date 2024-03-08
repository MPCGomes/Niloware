import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import markdowns from '../../data/markdowns.json';
import Markdown from '@/components/Markdown/Markdown';

interface File {
    name: string;
    path: string;
  }
  
  interface Chapter {
    chapter: string;
    files: File[];
  }
  
  interface ChapterPageProps {
    markdowns: Chapter[];
  }
  
  const ChapterPage: React.FC<ChapterPageProps> = ({ markdowns }) => {
      const [markdownContent, setMarkdownContent] = useState<string>("");
  
      const fetchMarkdownContent = async (path: string) => {
          const response = await fetch(`/path/to/markdown/files/${path}`);
          const text = await response.text();
          setMarkdownContent(text);
      };
  
      return (
          <div style={{ display: 'flex' }}>
              <Sidebar chapters={markdowns} onFileSelect={fetchMarkdownContent} />
              <Markdown content={markdownContent} />
          </div>
      );
  };
  
  export default ChapterPage;
