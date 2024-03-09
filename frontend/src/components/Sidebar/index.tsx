import React from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface ContentStructureItem {
  chapter: string;
  examples: string[];
}

interface SidebarProps {
  contentStructure: ContentStructureItem[];
  onSelect: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ contentStructure, onSelect }) => {
  const [expandedChapters, setExpandedChapters] = React.useState<string[]>([]);
  const router = useRouter();

  const handleSelect = (chapter: string, example: string) => {
    const examplePath = `${chapter}/${example}`;
    onSelect(examplePath);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, selectedPath: examplePath },
    }, undefined, { shallow: true });
  };

  const toggleChapter = (chapter: string) => {
    setExpandedChapters(prev => prev.includes(chapter) ? prev.filter(c => c !== chapter) : [...prev, chapter]);
  };

  return (
    <div>
      {contentStructure.map(({ chapter, examples }) => (
        <div key={chapter}>
          <button onClick={() => toggleChapter(chapter)} className={styles.mainButton}>{chapter}</button>
          {expandedChapters.includes(chapter) && (
            <div>
              {examples.map(example => (
                <div key={example}>
                  <button onClick={() => handleSelect(chapter, example)}>
                    {example}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
