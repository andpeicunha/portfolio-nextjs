type TituloPag = {
  numero?: string;
  titulo?: string;
  id?: string;
  className?: string;
};

export default function TituloPaginas(props: TituloPag) {
  return (
    <div
      id={props.id}
      className="fixed w-full right-0 mt-[-2.8rem] pl-[5.2rem]
      md:pl-[6.3rem] md:mt-[-0.5rem]
      lg:pl-[12.5%]
      xl:pl-[13.5%]"
    >
      <span className="text-verde-ti-1 font-mono text-titulo2">
        {props.numero}:
      </span>
      <span className="text-sky-700 font-bold text-titulo2">{' {'}</span>
      <span className="titulo-2">{props.titulo}</span>
      <span className="text-sky-700 font-bold text-titulo2">{'}'}</span>
    </div>
  );
}
