import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface ContentStructureItem {
  chapter: string;
  examples: string[];
}

interface SidebarProps {
  contentStructure: ContentStructureItem[];
  onSelect: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ contentStructure, onSelect }) => {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);
  const router = useRouter();
  const [timeoutIds, setTimeoutIds] = useState<NodeJS.Timeout[]>([]);

  const handleSelect = (chapter: string, example: string) => {
    const examplePath = `${chapter}/${example}`;
    onSelect(examplePath);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, selectedPath: examplePath },
    }, undefined, { shallow: true });
  };

  const toggleChapter = (chapter: string) => {
    const isExpanded = expandedChapters.includes(chapter);
    if (isExpanded) {
      const timeoutId = setTimeout(() => {
        setExpandedChapters(prev => prev.filter(c => c !== chapter));
      }, 300)
      setTimeoutIds(prev => [...prev, timeoutId]);
    } else {
      setExpandedChapters(prev => [...prev, chapter]);
    }

  };

  useEffect(() => {
    return () => {
      timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    };
  }, [timeoutIds]);

  return (
    <div>
      {contentStructure.map(({ chapter, examples }) => (
        <div key={chapter}>
          <div onClick={() => toggleChapter(chapter)} className={styles.mainButton}>
            {chapter} 
            {expandedChapters.includes(chapter) ? (
              <ChevronDown className={styles.arrow} size={26} color={'var(--text-color)'} />
            ) : (
              <ChevronRight className={styles.arrow} size={26} color={'var(--text-color)'} />
            )}
          </div>
          {expandedChapters.includes(chapter) && (
            <div className={styles.subButtonsContainer }>
              {examples.map(example => (
                <div key={example}>
                  <div onClick={() => handleSelect(chapter, example)} className={styles.subButton}>
                    {example}
                  </div>
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