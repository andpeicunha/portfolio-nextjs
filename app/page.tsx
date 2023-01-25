//NAVEGAÇÃO
"use client";
import React, { useState, useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  LinkedinLogo,
  IconHTML5,
  IconCSS3,
  IconTS,
  IconJava,
  IconGit,
  IconReact,
  IconTailwind,
  IconFigma,
  IconAdobe,
} from "../public/logotipo";
import Nav from "./navigator/page";
import SectionPage2 from "./about/page";

export default function Home() {
  const [mostraLogo, setMostraLogo] = useState(false);

  const iconsVariants: Variants = {
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {},
    initial: { opacity: 0 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* IMAGEM ESTRELAS FUNDO */}
      <div
        id="img-home-1"
        className="fixed -z-40 bg-black opacity-20 bg-clip-content bg-cover bg-center bg-fixed w-full h-full"
      ></div>

      {/* BARRA SUPERIOR */}
      <Nav />

      {/* ÍCONES TECNOLOGIAS */}
      <div
        id="LogosTecnologias"
        className="fixed flex flex-col h-full top-0 bottom-0 left-3.5 lg:left-4 pt-16"
      >
        {/* ÍCONES */}
        <div className="icon-home-tecs">
          <IconHTML5
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"HTML5"}
          />
        </div>
        <div className="icon-home-tecs">
          <IconCSS3
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"CSS3"}
          />
        </div>
        <div className="icon-home-tecs">
          <IconTailwind
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"Tailwind"}
          />
        </div>
        <div className="icon-home-tecs">
          <IconJava
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"ES6+"}
          />
        </div>
        <div className="icon-home-tecs">
          <IconTS
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"TS"}
          />
        </div>
        <div className="icon-home-tecs">
          <IconReact
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"ReactJS"}
          />
        </div>
        <div className="icon-home-tecs">
          <IconGit
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"Git"}
          />
        </div>
        <div className="icon-home-tecs">
          <IconFigma
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"Figma"}
          />
        </div>
        <div className="icon-home-tecs">
          <IconAdobe
            classNameSvg="icon-home-svg"
            width={0}
            UrlPage={""}
            texto={"Adobe Cloud"}
          />
        </div>
        <div
          id="Linha"
          className="ml-[25px] mt-6 h-full w-[1px] bg-white/50"
        ></div>
      </div>

      {/* TEXTO INÍCIO APRESENTAÇÃO */}
      <section
        id="page1"
        className="static min-h-screen max-h-full top-0 pt-8 pl-24 pr-8"
      >
        <div className="titulo-3 pl-0 -mb-3">Olá,</div>
        <div className="flex flex-row">
          <div className="titulo-3 pl-0 pr-3">Sou o </div>
          <div>
            <a
              href="https://www.linkedin.com/in/andpeicunha"
              onMouseEnter={() => setMostraLogo(true)}
              onMouseLeave={() => setMostraLogo(false)}
              className="titulo-3 text-verde-ti-vivo font-bold cursor-pointer"
            >
              André,
            </a>
          </div>
          {mostraLogo && (
            <motion.div variants={iconsVariants}>
              <LinkedinLogo
                className=""
                classNameSvg="h-[15px]"
                width={15}
                UrlPage={"https://www.linkedin.com/in/andpeicunha"}
              />
            </motion.div>
          )}
        </div>
        <h1 className="titulo-2 mt-4 text-[gray]-300/60 hover:blur-none">
          Um criativo Front End Developer{" "}
          <span className="opacity-100">✌</span>
        </h1>

        {/* FOTO ANDRE */}
        {/* <div
          id="foto-andre"
          className="absolute top-5 left-[1.5rem] bg-foto-andre bg-cover h-[11rem] aspect-square rounded-xl"
        ></div> */}

        <h1 className="titulo-1 mt-8 text-gray-200/50 ">
          Sou um desenvolvedor Front-End e adoro criar (e as vezes também
          desenhar) experiências incríveis na internet. Gosto de projetos
          desafiadores especilamente focados em UI.
        </h1>
      </section>

      <SectionPage2 />
    </>
  );
}
