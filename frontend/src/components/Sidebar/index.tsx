import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedPath, setSelectedPath } from '../../store/contentSlice';
import { ChevronRight, ChevronDown } from 'lucide-react';
import styles from './styles.module.scss';
import { loadFromCookies, saveToCookies } from '@/utils/cookieUtils';
import cn from 'classnames';

interface SidebarProps {
  markdownStructure: {
    chapter: string;
    sections: string[];
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ markdownStructure }) => {
  const dispatch = useDispatch();
  const currentSelectedPath = useSelector(selectSelectedPath);
  const [expandedChapters, setExpandedChapters] = useState<string[]>([]);

  useEffect(() => {
    const saved = loadFromCookies('expandedChapters');
    if (saved) {
      const parsed = JSON.parse(saved);
      setExpandedChapters(parsed);
    }
  }, []);

  useEffect(() => {
    saveToCookies('expandedChapters', JSON.stringify(expandedChapters));
  }, [expandedChapters]);

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
                size={21}
                color={'var(--text-color)'}
              />
            ) : (
              <ChevronRight
                className={styles.arrow}
                size={21}
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
                    className={cn(styles.subButton, { [styles.activeSectionButton]: `${chapter}/${section}` === currentSelectedPath })}
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