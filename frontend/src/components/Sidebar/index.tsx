import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedPath } from '../../store/contentSlice';
import { ChevronRight, ChevronDown } from 'lucide-react';
import styles from './styles.module.scss';

interface SidebarProps {
  markdownStructure: {
    chapter: string;
    sections: string[];
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ markdownStructure }) => {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleSelect = (chapter: string, section: string) => {
    const path = `${chapter}/${section}`;
    dispatch(setSelectedPath(path));
  };

  const toggleChapter = (chapter: string) => {
    setExpandedChapters((prev) =>
      prev.includes(chapter) ? prev.filter((c) => c !== chapter) : [...prev, chapter]
    );
  };

  return (
    <div>
      {markdownStructure.map(({ chapter, sections }) => (
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