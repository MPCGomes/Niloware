import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

interface Chapter {
  id: number;
  title: string;
}

const Sidebar: React.FC = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/chapters');
        if (!response.ok) {
          throw new Error('Failed to fetch chapters');
        }
        const data = await response.json();
        setChapters(data); 
        setIsLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to load chapters.');
        setIsLoading(false);
      }
    };

    fetchChapters();
  }, []); 

  if (isLoading) return <div>Loading chapters...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={styles.sidebar}>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>{chapter.title}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
