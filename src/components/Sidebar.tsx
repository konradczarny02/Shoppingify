import React from 'react';
import { AddItemBanner } from './AddItemBanner';
import { ListNameInput } from './ListNameInput';
import { ShoppingList } from './ShoppingList';

export const Sidebar = () => {
  const handleAddItem = () => {
    throw new Error('TODO: Add item not yet implemented');
  };

  const handleAddListName = (value: string) => {
    throw new Error('TODO: add list name');
  };

  return (
    <div className="w-full h-full bg-orange-200 relative p-12">
      <AddItemBanner onClick={handleAddItem} />
      <ShoppingList />
      <div className="bg-white absolute left-0 bottom-0 w-full px-12 h-32 flex justify-center items-center">
        <ListNameInput onSave={handleAddListName} />
      </div>
    </div>
  );
};
