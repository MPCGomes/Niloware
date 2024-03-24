import React, { useEffect, useState } from 'react';

interface TableOfContentsProps {
  markdown: string;
}

interface Heading {
  id: string;
  text: string;
}

const extractedHeadings = (markdown: string): Heading[] => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = markdown;
  return Array.from(tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => ({
    id: heading.id,
    text: heading.textContent || '',
  }));
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ markdown }) => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    setHeadings(extractedHeadings(markdown));
  }, [markdown]);

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
