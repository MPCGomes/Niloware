import MainLayout from '@/components/layout';
import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { getContentStructure } from '../lib/contentReader';
import Sidebar from '@/components/Sidebar';
import MarkdownRenderer from '@/components/MarkdownRenderer/intex';

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
      <Sidebar
        contentStructure={contentStructure}
        onSelect={handleSelect}
      />
      {selectedPath && <MarkdownRenderer path={selectedPath} />}
    </MainLayout>
  );
};

export default RPG;
