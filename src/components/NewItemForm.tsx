import React from 'react';

export const NewItemForm = () => {
  return (
    <div>
      <h3 className="font-medium text-2xl">Add new item</h3>
      <form className="flex flex-col mt-12">
        <label htmlFor="name" className="text-sm text-medium mb-2">
          Name
        </label>
        <input
          id="name"
          placeholder="Enter a name"
          className="rounded-xl bg-transparent border-2 border-gray-400 px-4 py-5 text-sm text-medium text-gray-400 focus:outline-2 focus:outline-orange-400 mb-7"
        />
        <label htmlFor="note" className="text-sm text-medium mb-2">
          Note (optional)
        </label>
        <textarea
          id="note"
          placeholder="Enter a note"
          className="rounded-xl bg-transparent border-2 border-gray-400 px-4 py-5 text-sm text-medium text-gray-400 focus:outline-2 focus:outline-orange-400 mb-7"
        />
        <label htmlFor="image-url" className="text-sm text-medium mb-2">
          Image (optional)
        </label>
        <input
          id="image-url"
          placeholder="Enter a url"
          className="rounded-xl bg-transparent border-2 border-gray-400 px-4 py-5 text-sm text-medium text-gray-400 focus:outline-2 focus:outline-orange-400 mb-7"
        />
        <label
          htmlFor="category"
          placeholder="Enter a category"
          className="text-sm text-medium mb-2"
        >
          Category
        </label>
        <select className="rounded-xl bg-transparent border-2 border-gray-400 px-4 py-5 text-sm text-medium text-gray-400 focus:outline-2 focus:outline-orange-400 mb-12">
          <option value="fruits">Fruits</option>
          <option value="meats">Meats</option>
        </select>
        <div className="flex justify-center gap-10">
          <input
            type="reset"
            value="cancel"
            className="font-bold text-black "
          />
          <input
            type="submit"
            value="Save"
            className="text-white font-bold bg-orange-400 py-5 px-6 rounded-xl"
          />
        </div>
      </form>
    </div>
  );
};
