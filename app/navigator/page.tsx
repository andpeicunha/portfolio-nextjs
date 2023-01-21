//PAGINA LAYTOU NAVEGAÇÃO PRINCIPAL
"use client";

import { motion } from "framer-motion";
import { Logo, LinkedinLogo, Blogger, Whats } from "@/public/logotipo";

export default function Nav() {
  return (
    <div
      id="Nav"
      className="fixed w-full h-[50px] top-0 bg-gray-800 py-2 pr-3 sm:pr-6"
    >
      <div className="flex justify-start items-center w-full space-x-4 p-1 ml-2 pr-3">
        <Logo className="grow aspect-auto" width={30} />

        <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
          <Whats className="icon-home-nav" width={22} href={"#"} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
          <Blogger className="icon-home-nav" width={22} href={"#"} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
          <LinkedinLogo
            className="icon-home-nav hover:px-2 cursor-pointer"
            width={25}
            href={"https://www.linkedin.com/in/andpeicunha"}
          />
        </motion.div>
      </div>
    </div>
  );
}
