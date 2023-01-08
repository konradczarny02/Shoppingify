import React from 'react';

export interface SearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: SearchProps) => {
  const { onChange } = props;
  return (
    <div className="py-4 px-5 rounded-xl flex gap-4 bg-white min-w-60">
      <span className="material-symbols-outlined">search</span>
      <input
        onChange={onChange}
        placeholder="search items"
        className="text-sm font-medium focus:outline-none"
      />
    </div>
  );
};
