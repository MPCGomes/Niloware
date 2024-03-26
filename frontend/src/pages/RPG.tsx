import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import MainLayout from '../components/layout';
import Sidebar from '../components/Sidebar';
import MarkdownRenderer from '../components/MarkdownRenderer/intex';
import TableOfContents from '../components/TableOfContents';
import styles from '../styles/rpg.module.scss';
import { parseMarkdownDirectory } from '../lib/markdownDirectoryParser';
import { selectSelectedPath } from '../store/contentSlice';
import { useSelector } from 'react-redux';

export const getStaticProps: GetStaticProps = async () => {
  const markdownStructure = parseMarkdownDirectory();
  return {
    props: {
      markdownStructure,
    },
    revalidate: 3600,
  };
};

interface MarkdownStructureItem {
  chapter: string;
  sections: string[];
}

interface RPGProps {
  markdownStructure: MarkdownStructureItem[];
}

const RPG: React.FC<RPGProps> = ({ markdownStructure }) => {
  const selectedPath = useSelector(selectSelectedPath);
  const [markdown, setMarkdown] = React.useState('');

  return (
    <MainLayout>
      <div className={styles.mainContainer}>
        <div className={styles.firstColumn}>
          <Sidebar markdownStructure={markdownStructure} />
        </div>
        <div className={styles.secondColumn}>
            <MarkdownRenderer onMarkdownChange={setMarkdown} />
        </div>
        <div className={styles.thirdColumn}>
          <TableOfContents markdown={markdown} />
        </div>
      </div>
    </MainLayout>
  );
};

export default RPG;
