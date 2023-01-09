import React from 'react';

export interface AddItemBanner {
  onClick: () => void;
}

export const AddItemBanner = (props: AddItemBanner) => {
  const { onClick } = props;
  return (
    <div className="w-full rounded-xl bg-pink-900 py-4 pr-5 pl-28 relative flex flex-col gap-3 items-start">
      <img
        src="/source.svg"
        alt="sauce bottle"
        className="absolute bottom-3 left-4"
      />
      <p className="text-white text-base font-bold">
        Didn’t find what you need?
      </p>
      <button
        onClick={onClick}
        className="py-3 px-7 text-sm text-black bg-white border-none font-bold rounded-xl"
      >
        Add item
      </button>
    </div>
  );
};
