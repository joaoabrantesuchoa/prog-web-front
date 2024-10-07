import RegisterForm from '@/components/register/RegisterForm';
import React from 'react';

const RegisterPage: React.FC = () => {
  return (
    <main className="flex flex-col text-lg font-semibold tracking-tight rounded-none max-w-[530px] text-neutral-500">
      <section className="flex relative flex-col items-start pt-px pr-5 pb-8 pl-16 w-full rounded-3xl min-h-[391px] max-md:pl-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b562f16e067a66c7aa31db59f99266ae4513ce36f39e1bb56eb18771558b6bb?apiKey=fd6afd361a0f4b339d9fff46b2790faa&" alt="" className="object-cover absolute inset-0 size-full" />
        <header className="flex relative gap-5 justify-between self-stretch text-2xl tracking-tight whitespace-nowrap max-md:max-w-full">
          <h1 className="my-auto">Cadastro de usuário</h1>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eba08ea0d154a1484afc3ddd26dbf4ce5f462e59671d997dab66d3edd44666d6?apiKey=fd6afd361a0f4b339d9fff46b2790faa&" alt="Company logo" className="object-contain shrink-0 max-w-full aspect-[1.14] w-[120px]" />
        </header>
        <RegisterForm />
      </section>
    </main>
  );
};

export default RegisterPage;