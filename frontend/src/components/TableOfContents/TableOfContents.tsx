import React, { useEffect, useState } from 'react';

interface TableOfContentsProps {
  content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const extractedHeadings = Array.from(tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .map(heading => ({
        id: heading.id,
        text: heading.textContent || '',
      }));
    setHeadings(extractedHeadings);
  }, [content]);

  return (
    <div>
      {headings.map(heading => (
        <button key={heading.id} onClick={() => document.getElementById(heading.id)?.scrollIntoView()}>
          {heading.text}
        </button>
      ))}
    </div>
  );
};

export default TableOfContents;
