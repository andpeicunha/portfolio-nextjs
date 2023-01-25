"use client";
import React, { useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type TituloPag = {
  numero?: string;
  titulo?: string;
};

export default function SectionPageWork(props: TituloPag) {
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
      <div className="mt-20">
        <span className="text-verde-ti-1 font-mono text-titulo2">
          {props.numero}:
        </span>
        <span className="text-sky-700 font-bold text-titulo2">{" {"}</span>
        <span className="text-titulo2">{props.titulo}</span>
        <span className="text-sky-700 font-bold text-titulo2">{"}"}</span>
      </div>

      {/* texto corpo */}
      <div className="txt-corpo text-gray-200/70 mt-6">
        <span className="text-verde-ti-vivo">Base BRasil</span>.
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <p />
        <span className="text-verde-ti-vivo">Grupo Store</span>
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <p />
        <span className="text-verde-ti-vivo">Estec Tecnologia</span>
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <p />
        <span className="text-verde-ti-vivo">Doce Affetto</span>
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </motion.div>
  );
}
