//NAVEGAÇÃO
"use client";

import { motion } from "framer-motion";
import { Logo, LinkedinLogo, Blogger, Whats } from "@/public/logotipo";

export default function Nav() {
  const iconsVariants = {
    scale: 1.25,
    rotate: 360,
  };

  return (
    <div
      id="Nav"
      className="absolute z-20 w-full h-[50px] top-0 bg-transparent py-2 pr-3 sm:pr-6"
    >
      <div className="flex justify-start items-center w-full p-1 ml-2 lg:ml-[1.20rem] pr-3">
        <Logo className="grow aspect-auto pl-3" width={30} />

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
