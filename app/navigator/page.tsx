//NAVEGAÇÃO
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Logo, LinkedinLogo } from "@/public/logotipo";

interface NavProps {
  className?: string;
}

function Nav(props: { className?: any; params?: any; searchParams?: any }) {
  // const { params, searchParams } = props;
  // const Nav: React.FC<NavProps> = (props) => {

  const iconsVariants = {
    scale: 1.25,
    rotate: 360,
  };

  return (
    <div className="flex justify-start items-center w-full p-1 ml-2 lg:ml-[1.20rem] pr-3">
      <Logo className="grow aspect-auto pl-[3%] lg:pl-[1%]" width={30} />

      {/* IMPORTA O ÍCONE DO LINKEDIN E EXECUTA UMA ANIMAÇÃO NO MOUSEOVER */}
      <motion.div whileHover={iconsVariants}>
        <LinkedinLogo
          className="icon-home-nav"
          width={25}
          href={"https://www.linkedin.com/in/andpeicunha"}
        />
      </motion.div>
    </div>
  );
}

export default Nav;
