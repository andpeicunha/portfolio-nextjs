import React from 'react';

interface MyProps {
  nomeEmpresa: string;
  periodo: string;
  funcao: string;
  descricao?: string;
  habilidades?: string[];
  funcao1?: string;
  periodo1?: string;
  descricao1?: string;
  funcao2?: string;
  periodo2?: string;
  descricao2?: string;
}

// export function Job(props: Job) {
export const Job = ({
  descricao = '',
  descricao1 = '',
  descricao2 = '',
  habilidades = [],
  ...props
}: MyProps) => {
  return (
    <div className="txt-corpo text-gray-200/70 mt-2 mb-9 md:mr-3 md:pr-4 xl:mt-[-1.5rem]">
      <ul>
        <li
          className="text-verde-ti-vivo font-bold text-xl mb-[0.2rem] mt-2
        md:text-[1.4rem] md:mb-[0.3rem]
        xl:text-[1.7rem]"
        >
          {props.nomeEmpresa}
        </li>
        <li
          className="text-md font-bold
        md:text-[1.05rem] mb-[0.15rem]
        xl:text-[1.25rem]"
        >
          {props.funcao}
        </li>
        <li className="mb-2 text-xs xl:text-[0.85rem]">{props.periodo}</li>
      </ul>
      <span className="text-[0.9rem] font-light xl:text-[1.1rem]">
        <b>Principais Stacks</b>
      </span>
      <div className="grid gap-2 grid-cols-2 mb-4">
        {habilidades.map((item) => (
          <div
            key={item}
            className="flex text-xs lg:text-[0.9rem] xl:text-[1rem] lg:py-[0.2rem] lg:opacity-60"
          >
            <span className="text-sm mt-[-3px] mr-[5px]">» </span>
            {item}
          </div>
        ))}
      </div>

      <ul>
        <li
          className="text-sm mt-[0.4rem]
          xl:text-[1.05rem] xl:leading-5"
          dangerouslySetInnerHTML={{ __html: descricao }}
        />

        <li
          className="text-md font-bold mt-4
        md:text-[1.05rem] mb-[0.15rem]
        xl:text-[1.25rem] xl:mt-6"
        >
          {props.funcao1 && props.funcao1}
        </li>
        <li className="text-xs xl:text-[0.85rem]">
          {props.periodo1 && props.periodo1}
        </li>
        <li
          className="text-sm mt-[0.4rem]
          xl:text-[1.05rem] xl:leading-5"
          dangerouslySetInnerHTML={{ __html: descricao1 }}
        />

        <li className="text-xs mt-3">{props.periodo2 && props.periodo2}</li>
        <li className="font-bold">{props.funcao2 && props.funcao2}</li>
        <li
          className="text-sm mt-1"
          dangerouslySetInnerHTML={{ __html: descricao2 }}
        />
      </ul>
    </div>
  );
};
