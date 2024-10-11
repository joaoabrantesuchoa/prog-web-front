/* eslint-disable @next/next/no-img-element */
import React from 'react';

type SearchBarProps = object

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <form className="flex gap-1.5 self-start px-2.5 py-3 text-lg font-medium tracking-tight text-gray-200 rounded-3xl border border-solid bg-black bg-opacity-0 border-neutral-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1e0b49b7dbce745c19880de3d78ed85fdb2a4d6f532dd210b0faee98b39860b?placeholderIfAbsent=true&apiKey=fd6afd361a0f4b339d9fff46b2790faa" className="object-contain shrink-0 aspect-[0.97] w-[33px]" alt="" />
      <label htmlFor="projectSearch" className="sr-only">Pesquisar projeto pelo nome</label>
      <input
        type="text"
        id="projectSearch"
        className="flex-auto my-auto bg-transparent border-none focus:outline-none"
        placeholder="Pesquisar projeto pelo nome"
      />
    </form>
  );
};

export default SearchBar;