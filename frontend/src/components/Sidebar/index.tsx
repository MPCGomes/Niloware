import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChevronRight, ChevronDown } from 'lucide-react';
import styles from './styles.module.scss';

interface ContentStructureItem {
  chapter: string;
  sections: string[];
}

interface SidebarProps {
  contentStructure: ContentStructureItem[];
  onSelect: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ contentStructure, onSelect }) => {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);
  const router = useRouter();

  const handleSelect = (chapter: string, section: string) => {
    const sectionPath = `${chapter}/${section}`;
    onSelect(sectionPath);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        selectedPath: sectionPath
      },
    }, undefined, { shallow: true });
  };

  const toggleChapter = (chapter: string) => {
    setExpandedChapters(prev => prev.includes(chapter) ? prev.filter(c => c !== chapter) : [...prev, chapter]);
  };

  return (
    <div>
      {contentStructure.map(({ chapter, sections }) => (
        <div key={chapter}>
          <div
            onClick={() => toggleChapter(chapter)}
            className={styles.mainButton}
          >
            {chapter}
            {expandedChapters.includes(chapter) ? (
              <ChevronDown
                className={styles.arrow}
                size={26}
                color={'var(--text-color)'}
              />
            ) : (
              <ChevronRight
                className={styles.arrow}
                size={26}
                color={'var(--text-color)'}
              />
            )}
          </div>
          {expandedChapters.includes(chapter) && (
            <div className={styles.subButtonsContainer}>
              {sections.map(section => (
                <div key={section}>
                  <div
                    onClick={() => handleSelect(chapter, section)}
                    className={styles.subButton}
                  >
                    {section}
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