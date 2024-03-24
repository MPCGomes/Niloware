import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import styles from '../../styles/markdown.module.scss';
import { useSelector } from 'react-redux';
import { selectSelectedPath } from '../../store/contentSlice';

interface MarkdownRendererProps {
  onMarkdownChange?: (markdown: string) => void;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ onMarkdownChange }) => {
  const selectedPath = useSelector(selectSelectedPath);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/markdowns/pt-br/${selectedPath}.md`);
        const text = await response.text();
        setMarkdown(text);
        onMarkdownChange?.(text);
      } catch (error) {
        console.error('Failed to load markdown:', error);
      }
    };

    if (selectedPath) {
      fetchMarkdown();
    }
  }, [selectedPath, onMarkdownChange]);

  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        children={markdown}
        className={styles.text}
      />
    </div>
  );
};

export default MarkdownRenderer;