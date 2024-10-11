/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ProjectCardProps {
  id: number;
  titulo: string;
  descricao: string;
  professorId: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  titulo,
  descricao,
  professorId,
}) => {
  console.log({ id, titulo, descricao, professorId }); // Adiciona log para depuração

  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-lg tracking-tight text-green-950 max-md:mt-8">
        <div className="flex flex-col px-8 py-7 w-full bg-lime-200 rounded-3xl max-md:px-5">
          <h2 className="self-center font-semibold">{titulo}</h2>
          <p className="mt-2.5">{descricao}</p>
          <div className="flex gap-5 justify-center items-center mt-1.5 w-full text-sm font-medium tracking-tight text-white min-h-[37px]">
            <button className="gap-2.5 self-stretch px-7 py-2.5 my-auto rounded-xl bg-slate-400 max-md:px-5">
              Acessar projeto
            </button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b01e4e72b29b00198674cd6e17057664633ce3077ea1fad0dc918d0a23ac0e55?placeholderIfAbsent=true&apiKey=fd6afd361a0f4b339d9fff46b2790faa"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
