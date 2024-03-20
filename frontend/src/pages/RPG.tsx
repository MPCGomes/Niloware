import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import MainLayout from '../components/layout';
import Sidebar from '../components/Sidebar';
import MarkdownRenderer from '../components/MarkdownRenderer/intex';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import styles from '../styles/rpg.module.scss';
import { getContentStructure } from '../lib/markdownDirectoryParser';

export const getStaticProps: GetStaticProps = async () => {
  const contentStructure = getContentStructure();
  return {
    props: {
      contentStructure,
    },
    revalidate: 3600,
  };
};

interface ContentStructureItem {
  chapter: string;
  sections: string[];
}

interface RPGProps {
  contentStructure: ContentStructureItem[];
}

const RPG: React.FC<RPGProps> = ({ contentStructure }) => {
  const [selectedPath, setSelectedPath] = useState('');
  const [content, setContent] = useState('');

  const handleSelect = (path: string) => {
    setSelectedPath(path);
  };

  return (
    <MainLayout>
      <div className={styles.mainContainer}>
        <div className={styles.firstColumn}>
          <Sidebar
            contentStructure={contentStructure}
            onSelect={handleSelect}
          />
        </div>
        <div className={styles.secondColumn}>
          {selectedPath && (
            <MarkdownRenderer
              path={selectedPath}
              onContentChange={setContent}
            />
          )}
        </div>
        <div className={styles.thirdColumn}>
          <TableOfContents content={content} />
        </div>
      </div>
    </MainLayout>
  );
};

export default RPG;
