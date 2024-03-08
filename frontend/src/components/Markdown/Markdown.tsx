import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
    content: string;
}

const Markdown: React.FC<MarkdownProps> = ({ content }) => (
    <ReactMarkdown>
        {content}
    </ReactMarkdown>
);

export default Markdown;