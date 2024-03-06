// Importa React e o arquivo de estilos
import React from 'react';
import styles from './styles.module.scss';


// Define a estrutura e tipos das props que SidebarItem espera receber
interface Item {
  name: string; // Nome do item
  subItems?: Item[]; // Lista opcional de subitens
}

interface SidebarItemProps {
  item: Item; // O item a ser renderizado
  active: boolean; // Indica se o item está ativo
  onClick: () => void; // Função a ser chamada ao clicar no item
}

// Componente funcional SidebarItem que renderiza um item da sidebar e seus subitens, se houver
const SidebarItem: React.FC<SidebarItemProps> = ({ item, active, onClick }) => {
  return (
    <div>
      <div className="sidebar-item" onClick={onClick}>
        {item.name}
      </div>
      {active && item.subItems && ( // Verifica se o item está ativo e se tem subitens para renderizá-los
        <div className="sidebar-subitems">
          {item.subItems.map((subItem, index) => ( // Itera sobre os subitens, se existirem
            <div key={index} className="sidebar-subitem">
              {subItem.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;