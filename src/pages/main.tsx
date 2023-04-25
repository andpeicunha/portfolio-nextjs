import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Head from 'next/head';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { LinkedinLogo } from '../components/logotipo';
import { SideBarStacks } from '../components/sideBarStacks';

import { Nav } from '../components/navigator/navBarTop';
import SectionPageAbout from '../components/about/about';
import SectionPageWork from '../components/work/workXP';
import { Articles } from '../components/articles/articles';
import MaoBalancando from '../images/victory-hand.png';

export default function Home() {
  const [mostraLogoLinkedin, setMostraLogoLinkedin] = useState(false);
  const [language] = useState('ptBR');
  const yearNow = new Date().getFullYear();
  const yearsReact = yearNow - 2019;

  const iconsVariants: Variants = {
    animate: {
      x: 0,
      opacity: 1,
    },
    transition: {},
    initial: { opacity: 0 },
    exit: { opacity: 0 },
  };

  const [hidden, setHidden] = useState(false);
  function handleScroll() {
    if (window.pageYOffset > 50) {
      setHidden(true);
      console.log('true');
    } else {
      setHidden(false);
      console.log('false');
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>André Peixoto | Front End Developer</title>
        <meta
          name="description"
          content="André Peixoto | Front End Developer"
        />
        <meta
          property="og:title"
          content="Front-End Developer | André Peixoto"
        />
        <meta
          property="og:description"
          content="Um desenvolvedor apaixonado por design, responsividade e performance."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div
        id="img-home-1"
        className="fixed -z-40 bg-black opacity-20 bg-clip-content bg-cover bg-center bg-fixed w-full h-full"
      ></div>

      <AnimatePresence>
        {/* Not Hidden */}
        {!hidden && (
          <motion.div
            className="div-navigation"
            initial={{ opacity: 1, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{
          opacity: 0,
          x: -100,
          scale: 1,
        }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <SideBarStacks />
      </motion.div>

      <section id="page1" className="section-page-1">
        <div className="flex-col titulo-0 pl-0 -mb-3">
          <div className="">{language === 'ptBR' ? 'Olá!' : 'Hi!'}</div>
          <div
            className="relative w-[24px] md:w-[27px]  aspect-square
          top-[-23px] md:top-[-32px] left-[28px] md:left-[45px] bg-cover"
          >
            <Image
              src={MaoBalancando}
              height={24}
              width={24}
              alt="mão da vitória"
              priority
            />
          </div>
          <div className="relative mt-[-25px] md:text-[1.1rem]">
            {language === 'ptBR' ? 'Eu sou o' : "I'm"}
          </div>
        </div>

        <div className="flex flex-row mt-1">
          <div>
            <a
              href="https://www.linkedin.com/in/andpeicunha"
              onMouseEnter={() => setMostraLogoLinkedin(true)}
              onMouseLeave={() => setMostraLogoLinkedin(false)}
              className="titulo-3 text-verde-ti-vivo font-bold cursor-pointer"
            >
              André Peixoto,
            </a>
          </div>
          {mostraLogoLinkedin && (
            <motion.div variants={iconsVariants}>
              <LinkedinLogo
                className=""
                classNameSvg="h-[15px]"
                width={15}
                UrlPage={'https://www.linkedin.com/in/andpeicunha'}
              />
            </motion.div>
          )}
        </div>
        <div className="flex titulo-2 mt-2 text-[gray]-300/60 hover:blur-none items-baseline">
          Um apaixonado Front-End Developer
        </div>

        <h1
          className="text-1xl mt-8 text-gray-200/70 pr-0
        sm:pr-[7rem] lg:pr-[20rem] xl:text-[1.3rem]"
        >
          Adoro{' '}
          <span className="text-verde-ti-vivo">
            criar experiências inovadoras
          </span>{' '}
          na web. Investigo, colaboro e acredito em interfaces elegantes,
          intuitivas e modernas.
          <p />
          Sou apaixonado por fotografia, design e <span>
            novas tecnologias
          </span>{' '}
          Front-End.
          <p />
          São <span>mais de 7 anos</span> em desenvolvimento Front-End e cerca
          de <span>{yearsReact} anos</span> com React e NextJs.
        </h1>
      </section>

      <SectionPageAbout />
      <SectionPageWork />
      <Articles />
    </>
  );
}
