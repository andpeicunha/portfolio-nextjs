"use client";
import React, { useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TituloPaginas from "../component/tituloPage";

export default function SectionPageAbout() {
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
      className=" section-pages 
      md:grid md:grid-cols-2"
    >
      <TituloPaginas
        id="SECTION 1 - ABOUT"
        numero="01"
        titulo="História Profissional"
      />

      {/* texto corpo */}
      <div
        className=" text-[0.9rem] text-gray-200/70 pr-0 
        sm:pr-[7rem] 
        md:text-[0.90rem] md:pr-[0rem] md:h-auto
        lg:text-[0.95rem]
        xl:text-[1.1rem]"
      >
        Aos 16 anos começei estagiando como{" "}
        <span className="text-verde-ti-vivo">Design Gráfico</span>, logo tive
        novas oportunidades, mas continuava me sentindo deslocado, era tudo
        muito <b>estático</b>. Eu realmente{" "}
        <span className="text-verde-ti-vivo">
          curtia o processo de criação,
        </span>{" "}
        mas design gráfico não me motivava.
        <p />
        Num dia, já trabalhando numa gráfica em São Caetano do Sul, um cliente
        fez uma proposta. Me lembro claramente da ligação e do convite, foi
        emocionante - aquilo era novo e promissor - eu seria um{" "}
        <span className="text-verde-ti-vivo">Web Design</span>... foi alí que
        descobri <span className="text-verde-ti-vivo">uma paixão</span>!
        <p />
        Passei{" "}
        <span className="text-verde-ti-vivo">
          longos anos trabalhando com Front-End
        </span>{" "}
        e naturalmente a carreira foi evoluindo para novos e mais complexos
        desafios.
        <p />
        <p />
        Aqui na lateral você pode ver algumas tecnologias, frameworks e sistemas
        que trabalho.
      </div>

      {/* FOTO ANDRE */}
      <div
        className="flex-col top-0 flex h-full w-full py-5 justify-center items-center
        md:grid md:left-[10rem] md:items-start md:pt-0"
      >
        <div
          id="foto-andre"
          className="mb-5 grayscale hover:grayscale-0 
          bg-foto-andre bg-cover aspect-square rounded-xl h-[11rem] 
          md:h-[13rem] md:drop-shadow-md
          lg:h-[16rem]"
        ></div>
        <a
          href="./cv-frontend.pdf"
          download
          className="flex justify-center w-full md:mt-[-8rem] lg:mt-[-5rem]"
        >
          <button
            className="grid grid-flow-col gap-1 md:w-full justify-center align-middle bg-blue-300/20 hover:bg-blue-700 text-white font-bold py-2
            px-4 rounded-md shadow-md hover:shadow-lg"
          >
            <svg
              className="col-span-1 mt-[0.2rem] fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span className="col-span-3 text-white text-[14px] md:text-[15px] font-normal">
              Ver Currículo
            </span>
          </button>
        </a>
      </div>
    </motion.div>
  );
}
