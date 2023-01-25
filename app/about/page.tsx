"use client";
import React, { useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionPage2() {
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 },
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
      className="section-page-2"
    >
      <div className="mt-10">
        <span>className:</span> {"{Sobre Mim}"}
      </div>
      <div>Texto</div>
    </motion.div>
  );
}
