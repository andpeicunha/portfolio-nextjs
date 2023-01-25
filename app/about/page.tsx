"use client";
import React, { useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type TituloPag = {
  numero?: string;
  titulo?: string;
};

export default function SectionPageAbout(props: TituloPag) {
  const squareVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut", duration: 0.6, y: 0 },
    },
    hidden: { opacity: 0, scale: 0.8, y: 100 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="section-pages"
    >
      {/* titulo página */}
      <div className="mt-3">
        <span className="text-verde-ti-1 font-mono text-titulo2">
          {props.numero}:
        </span>
        <span className="text-sky-700 font-bold text-titulo2">{" {"}</span>
        <span className="text-titulo2">{props.titulo}</span>
        <span className="text-sky-700 font-bold text-titulo2">{"}"}</span>
      </div>

      {/* texto corpo */}
      <div className="txt-corpo text-gray-200/70 mt-6">
        Aos 16 anos começei estagiando como{" "}
        <span className="text-verde-ti-vivo">Design Gráfico</span>. Logo tive
        uma oportunidade numa outra gráfica, mas ainda achava aquilo um tanto
        chato, era tudo muito estático, eu{" "}
        <span className="text-verde-ti-vivo">
          curtia apenas do processo de criação.
        </span>
        <p />
        Porém um cliente, que gostava do meu trabalho, me fez uma proposta. Me
        lembro claramente da ligação e do convite, foi emocionante, aquilo era
        novo e pareceu promissor - eu seria um{" "}
        <span className="text-verde-ti-vivo">Web Design</span> - foi alí que
        descobri uma paixão!
        <p />
        Passei alguns anos trabalhando como Web Design na{" "}
        <span className="text-verde-ti-vivo">Base Brasil</span> e em 2002 tive
        uma oportunidade no{" "}
        <span className="text-verde-ti-vivo">Grupo Store</span>... alí eu teria
        meu primeiro contato com desenvolvimento Front-End.
        <p />
        Inicialmente me especializei em{" "}
        <span className="text-verde-ti-vivo">Design IU/UX</span> e naturalmente
        veio o desenvolvimento{" "}
        <span className="text-verde-ti-vivo">Front-End</span> na medida que os
        sistemas também foram migrando pra web.
        <p />
        Aqui na lateral você pode ver algumas tecnologias, frameworks e sistemas
        que trabalho.
      </div>

      {/* FOTO ANDRE */}
      <div className="flex w-full pt-5 justify-center align-bottom">
        <div
          id="foto-andre"
          className="h-[11rem] bg-foto-andre bg-cover aspect-square rounded-xl"
        ></div>
      </div>
    </motion.div>
  );
}
