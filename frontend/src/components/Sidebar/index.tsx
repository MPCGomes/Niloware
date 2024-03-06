import React from 'react';
import styles from './styles.module.scss';
import { useFetch } from '@/hooks/useFetch';

interface Chapter {
  id: number;
  title: string;
}

const Sidebar: React.FC = () => {
  const { data: chapters, isLoading, error } = useFetch<Chapter[]>('http://localhost:8080/api/chapters');

  if (isLoading) return <div>Loading chapters...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div></div>
  );
};

export default Sidebar;
