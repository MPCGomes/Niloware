import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styles from '../../styles/markdown.module.scss';
import rehypeSlug from 'rehype-slug';

interface MarkdownRendererProps {
  path: string;
  onContentChange: (content: string) => void;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ path, onContentChange }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fullPath = `/markdowns/pt-br/${path}.md`;
    fetch(fullPath)
      .then(response => response.text())
      .then(text => {
        setContent(text); 
        onContentChange(text); 
      })
      .catch(error => console.error('Failed to load markdown content:', error));
  }, [path, onContentChange]);

  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        children={content}
        className={styles.text}
      />
    </div>
  )
};

export default MarkdownRenderer;
