/* eslint-disable @next/next/no-img-element */
import React from "react";

type SidebarProps = object;

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav className="flex flex-col pt-5 pr-3 pl-1.5 text-base font-medium tracking-tight bg-stone-200 pb-[575px] text-neutral-500 max-md:pb-24">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e92db7547fcf2b56d4b0a1906adbc9a7465187a6557281b5282b773911093c3?placeholderIfAbsent=true&apiKey=fd6afd361a0f4b339d9fff46b2790faa"
        className="object-contain self-center w-12 aspect-square"
        alt=""
      />
      <div className="flex gap-4 self-start mt-10 whitespace-nowrap max-md:mt-10 max-md:ml-1.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/812093e2a30dea5efcfab5699cabfe871992c8d9945cee8eb6ac5c46d82353c6?placeholderIfAbsent=true&apiKey=fd6afd361a0f4b339d9fff46b2790faa"
          className="object-contain shrink-0 w-8 aspect-square"
          alt=""
        />
        <div className="my-auto">Home</div>
      </div>
      <div className="flex gap-2.5 self-start mt-3.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2062805eba71ecdd3ef0103edd9b39569d6bde257858ecc236d2dc9d36bf7ba2?placeholderIfAbsent=true&apiKey=fd6afd361a0f4b339d9fff46b2790faa"
          className="object-contain shrink-0 w-11 aspect-[0.94]"
          alt=""
        />
        <div className="my-auto">Criar projeto</div>
      </div>
      <div className="flex gap-2 mt-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2062805eba71ecdd3ef0103edd9b39569d6bde257858ecc236d2dc9d36bf7ba2?placeholderIfAbsent=true&apiKey=fd6afd361a0f4b339d9fff46b2790faa"
          className="object-contain shrink-0 w-11 aspect-[0.94]"
          alt=""
        />
        <div className="my-auto">Cadastrar usuário</div>
      </div>
    </nav>
  );
};

export default Sidebar;
