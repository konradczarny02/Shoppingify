import React from 'react';

export interface ListNameInputProps {
  onSave: (value: string) => void;
}

export const ListNameInput = (props: ListNameInputProps) => {
  const [inputValue, setInputValue] = React.useState('');
  const { onSave } = props;
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);
  const handleSave = () => onSave(inputValue);
  return (
    <div className="w-full rounded-xl border-2 border-orange-400 pl-3 flex items-center overflow-hidden">
      <input
        onBlur={handleBlur}
        placeholder="Enter a name"
        className="text-sm focus:outline-none"
      />
      <button
        onClick={handleSave}
        className="h-full ml-auto py-3 text-white px-6 bg-orange-400 border-none"
      >
        Save
      </button>
    </div>
  );
};
