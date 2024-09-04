import React, { useState } from 'react';

export interface NavigationItem {
  name: string;
  subItems?: NavigationItem[];
}

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  
    const toggleExpand = (itemName: string) => {
      setExpandedItems(prevState => ({
        ...prevState,
        [itemName]: !prevState[itemName],
      }));
    };
  
    const renderItems = (items: NavigationItem[], parentName?: string) => (
      <ul>
        {items.map((item, index) => {
          const itemName = parentName ? `${parentName}-${item.name}` : item.name;
          const isExpanded = expandedItems[itemName];
  
          return (
            <li key={index} className={`navigation-item ${isExpanded ? 'expanded' : ''}`}>
              <span
                onClick={() => toggleExpand(itemName)}
                className={item.subItems ? 'has-children' : ''}
              >
                {item.name}
              </span>
              {item.subItems && isExpanded && renderItems(item.subItems, itemName)}
            </li>
          );
        })}
      </ul>
    );

  return (
    <div className="navigation">
      <h2>Navigation</h2>
      {renderItems(items)}
    </div>
  );
};

export default Navigation;
