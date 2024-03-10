import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styles from './styles.module.scss';

interface MarkdownRendererProps {
  path: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ path }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fullPath = `/markdowns/pt-br/${path}.md`;
    fetch(fullPath)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Failed to load markdown content:', error));
  }, [path]);

  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={content}
        className={styles.text}
      />
    </div>
  )
};

export default MarkdownRenderer;
