//NAVEGAÇÃO
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Logo, LinkedinLogo } from "@/public/logotipo";

type NavProps = {
  className?: string;
};

export default function Nav(props: NavProps) {
  const iconsVariants = {
    scale: 1.25,
    rotate: 360,
  };

  return (
    <div id="Nav" className={props.className}>
      <div className="flex justify-start items-center w-full p-1 ml-2 lg:ml-[1.20rem] pr-3">
        <Logo className="grow aspect-auto pl-[3%] lg:pl-[1%]" width={30} />

        {/* BARRA DE ÍCONES NAV BAR */}
        <motion.div whileHover={iconsVariants}>
          <LinkedinLogo
            className="icon-home-nav"
            width={25}
            href={"https://www.linkedin.com/in/andpeicunha"}
          />
        </motion.div>
      </div>
    </div>
  );
}
