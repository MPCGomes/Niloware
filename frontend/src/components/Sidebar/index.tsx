import React, { useState } from 'react';
import SidebarItem from './SidebarItem';
import styles from './styles.module.scss';

// Define a estrutura de um item da Sidebar, onde cada item pode opcionalmente ter subitens
interface Item {
  name: string; // O nome do item
  subItems?: Item[]; // Uma lista opcional de subitens, que também são do tipo Item
}

// Lista estática de itens para serem exibidos na Sidebar
const items: Item[] = [
  {
    name: 'Tópico 1',
    subItems: [
      { name: 'Subtópico 1.1' },
      { name: 'Subtópico 1.2' },
    ],
  },
  {
    name: 'Tópico 2',
    subItems: [
      { name: 'Subtópico 2.1' },
      { name: 'Subtópico 2.2' },
    ],
  },
  // Adicione mais tópicos conforme necessário
];

// Componente funcional Sidebar
const Sidebar: React.FC = () => {
  // State para controlar qual item está atualmente ativo
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Função para lidar com o clique em um item, definindo-o como ativo ou não
  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Alterna o estado ativo baseado no índice clicado
  };

  // Renderiza a sidebar com seus itens e subitens, passando props necessárias para o SidebarItem
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem
          key={index} // Chave única para cada item (necessária em listas no React)
          item={item} // O item atual a ser renderizado
          active={index === activeIndex} // Booleano indicando se o item está ativo
          onClick={() => handleClick(index)} // Função chamada ao clicar no item
        />
      ))}
    </div>
  );
};

export default Sidebar;