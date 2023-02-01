//NAVEGAÇÃO
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
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
import SectionPageAbout from "./about/page";
import { SectionPageWork } from "./work/page";

export default function Home() {
  const [mostraLogo, setMostraLogo] = useState(false);

  // FRAMER MOTION ICON SECTION TOP
  const iconsVariants: Variants = {
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {},
    initial: { opacity: 0 },
    exit: { opacity: 0 },
  };

  // DIV NAV HIDDEN SCROLL DOWN COM FRAMER MOTION
  const [hidden, setHidden] = useState(false);
  function handleScroll() {
    if (window.pageYOffset > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }
  return (
    <>
      {/* IMAGEM ESTRELAS FUNDO */}
      <div
        id="img-home-1"
        className="fixed -z-40 bg-black opacity-20 bg-clip-content bg-cover bg-center bg-fixed w-full h-full"
      ></div>

      {/* BARRA SUPERIOR */}
      <motion.div
        className="div-navigation"
        initial={{ opacity: 1 }}
        animate={{ opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <Nav />
      </motion.div>

      {/* ÍCONES TECNOLOGIAS */}
      <div
        id="LogosTecnologias"
        className="fixed top-0 flex-col h-screen 
        w-[35px] left-[5%] md:left-[4%] lg:left-[1.9rem] pt-28"
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
            texto={"Typescript"}
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
            texto={"Adobe Cloud (Photoshop, Illustrator, Premiere)"}
          />
        </div>
        <div
          id="Linha"
          className="ml-[50%] mt-6 h-full w-[1px] bg-white/50"
        ></div>
      </div>

      {/* TEXTO INÍCIO APRESENTAÇÃO */}
      <section id="page1" className="section-page-1">
        {/* Texto saudação */}
        <div className="flex-col titulo-0 pl-0 -mb-3">
          <div className="">Olá!</div>
          <div
            className="relative w-[24px] md:w-[27px]  aspect-square
          top-[-23px] md:top-[-32px] left-[28px] md:left-[45px]  bg-[url('/victory-hand.png')] bg-cover"
          />
          <div className="relative mt-[-25px] md:text-[1.1rem]">Eu sou o </div>
        </div>

        <div className="flex flex-row mt-1">
          <div>
            <a
              href="https://www.linkedin.com/in/andpeicunha"
              onMouseEnter={() => setMostraLogo(true)}
              onMouseLeave={() => setMostraLogo(false)}
              className="titulo-3 text-verde-ti-vivo font-bold cursor-pointer"
            >
              André Peixoto,
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
        {/* H1 - Slogan */}
        <div className="flex titulo-2 mt-2 text-[gray]-300/60 hover:blur-none items-baseline">
          Um apaixonado Front-End Developer
        </div>

        {/* TEXTO ABERTURA PAG 1 */}
        <h1
          className="text-1xl mt-8 text-gray-200/70 pr-0 
        sm:pr-[7rem] lg:pr-[20rem] xl:text-[1.3rem]"
        >
          Adoro{" "}
          <span className="text-verde-ti-vivo">
            criar experiências incríveis
          </span>{" "}
          na internet. Estudo, trabalho e acredito em interfaces intuitivas e
          modernas.
          <p />
          São <span className="text-verde-ti-vivo">
            mais de 15 anos em TI
          </span>{" "}
          em mútiplos projetos, dos mais diferentes segmentos e empresas, mais
          de 7 anos com{" "}
          <span className="text-verde-ti-vivo">desenvolvimento Front-End</span>,
          essa é a minha{" "}
          <span className="text-verde-ti-vivo font-bold">
            verdadeira paixão.
          </span>
        </h1>
      </section>

      <SectionPageAbout />
      <SectionPageWork />
    </>
  );
}
