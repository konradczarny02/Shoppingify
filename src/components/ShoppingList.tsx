import React from 'react';
import { Category, Item } from './Category';

const mockFruits: Item[] = [
  { id: '1', name: 'Avocado' },
  { id: '2', name: 'Corn' },
];

export const ShoppingList = () => {
  return (
    <div className="mt-12 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Shopping list</h3>
        <span className="material-symbols-outlined">edit</span>
      </div>
      <Category label="Fruits and vegetables" items={mockFruits} />
      <Category label="Meat and Fish" items={[]} />
      <Category label="Beverages" items={[]} />
      <Category label="Pets" items={[]} />
    </div>
  );
};
