import MainLayout from '@/components/layout';
import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { getContentStructure } from '../lib/contentReader';
import Sidebar from '@/components/Sidebar';
import MarkdownRenderer from '@/components/MarkdownRenderer/intex';
import styles from '../styles/rpg.module.scss'

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
  examples: string[];
}

interface RPGProps {
  contentStructure: ContentStructureItem[];
}

const RPG: React.FC<RPGProps> = ({ contentStructure }) => {
  const [selectedPath, setSelectedPath] = useState('');

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
          {selectedPath && <MarkdownRenderer path={selectedPath} />}
        </div>
        <div className={styles.thirdColumn}>

        </div>
      </div>
    </MainLayout>
  );
};

export default RPG;
