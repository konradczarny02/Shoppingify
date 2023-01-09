import React from 'react';

export interface Item {
  id: string;
  name: string;
}

export interface CategoryProps {
  label: string;
  items: Item[];
}

export const Category = (props: CategoryProps) => {
  const { label, items } = props;
  return (
    <div>
      <h5 className="text-gray-500 mb-3 text-sm">{label}</h5>
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li key={item.id} className="text-lg">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
