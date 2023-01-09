import React from 'react';
import { Heading } from './Heading';
import { Search } from './Search';
import { useDebouncedCallback } from 'use-debounce';

export const Header = () => {
  // TODO add search logic here
  const debouncedSearch = useDebouncedCallback(
    (value: string) => console.log(value),
    300,
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    debouncedSearch(e.currentTarget.value);

  return (
    <div className="flex gap-16 justify-center items-start lg:justify-items-start">
      <Heading />
      <Search onChange={handleSearch} />
    </div>
  );
};
