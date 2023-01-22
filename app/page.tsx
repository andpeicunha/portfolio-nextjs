//NAVEGAÇÃO
"use client";
import React, { useState } from "react";
import { LinkedinLogo, IconHTML5, IconCSS3 } from "../public/logotipo";
import { motion } from "framer-motion";

export default function Home() {
  const [mostraLogo, setMostraLogo] = useState(false);

  return (
    <>
      {/* CORPO HOME */}
      <div id="Body" className="relative pt-8 pl-6 pr-20">
        <h1 className="titulo-3">Olá,</h1>

        <div id="Nome" className="relative">
          <div className="asolute titulo-3 mr-3">I&#39;m </div>
          <div
            onMouseEnter={() => setMostraLogo(true)}
            onMouseLeave={() => setMostraLogo(false)}
            className="absolute left-24 top-0 bottom-0 titulo-3 text-gray-700 font-bold cursor-pointer"
          >
            André,
          </div>
          {mostraLogo && (
            <motion.div
              animate={{
                x: 0,
                opacity: 1,
              }}
              // transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
              transition={{
                delay: 0,
                x: { duration: 2 },
                default: { ease: "easeIn" },
              }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <LinkedinLogo
                className="absolute left-[272px] top-[0px] bottom-0 "
                classNameSvg="h-[15px] "
                width={25}
                UrlPage={"https://www.linkedin.com/in/andpeicunha"}
              />
            </motion.div>
          )}
        </div>

        <h1 className="titulo-2 text-2xl mt-4 text-gray-600/80 hover:blur-none">
          Um criativo Front End Developer ✌
        </h1>

        {/* ICONES TECNOLOGIAS HOME */}
        <div
          id="LogosTecnologias"
          className="absolute top-5 right-2 flex-col"
        >
          <IconHTML5
            className="cursor-default my-5"
            classNameSvg=""
            width={25}
            UrlPage={""}
          />
          <IconCSS3
            className="cursor-default my-5"
            classNameSvg=""
            width={55}
            UrlPage={""}
          />
        </div>

        <h1 className="titulo-2 text-xl mt-3 text-gray-200/50 ">
          Sou natural de São Paulo, e minha história com TI começou cedo, mas
          não exatamente como programador.
          <p className="h-3" /> Meu primeiro trabalho na área, aos 16 anos, foi
          como design na gráfica de um tio. Na época ele não queria, mas eu
          estava estudando Design e Publicidade na ETEC e queria trabalhar. Pra
          ele aceitar eu tive de levar o computador de casa e ele pagava apenas
          a condução, assim começei.
        </h1>
      </div>
    </>
  );
}
