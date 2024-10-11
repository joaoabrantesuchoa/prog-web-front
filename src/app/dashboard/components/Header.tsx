/* eslint-disable @next/next/no-img-element */
import React from 'react';

type HeaderProps = object

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="px-16 py-4 w-full bg-stone-200 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
          <h1 className="grow px-16 py-6 w-full text-2xl font-medium tracking-tight whitespace-nowrap bg-white rounded-3xl border border-solid border-neutral-500 text-neutral-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            Projetos
          </h1>
        </div>
        <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-6 self-stretch my-auto text-xl font-medium tracking-tight text-neutral-500 max-md:mt-10">
            <div className="my-auto basis-auto">Olá, Symara!</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b98c1e40e2eb13e09d2e0d8afbcb58f567a0862178c44afe1cdfe92b91a1f9e3?placeholderIfAbsent=true&apiKey=fd6afd361a0f4b339d9fff46b2790faa" className="object-contain shrink-0 aspect-[1.15] w-[54px]" alt="User avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;