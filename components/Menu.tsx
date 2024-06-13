import React, { useState } from "react";

const menuItem = [
  { name: "Atores", href: "#" },
  { name: "Casos de Uso", href: "#" },
  { name: "Fatores Técnicos", href: "#" },
  { name: "Fatores Ambientais", href: "#" },
  { name: "Valores de Esforço", href: "#" },
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(menuItem[0]); //useState<string | null>(null);

  const handleItemClick = (item: { name: string; href: string }) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="mt-2">
        <ul className="flex flex-row items-start py-2">
          {menuItem.map((item) => (
            <li key={item.name} className="pr-3">
              <a
                href={item.href}
                className={`menu-item ${
                  selectedItem === item
                    ? "border-indigo-500 text-indigo-600 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
