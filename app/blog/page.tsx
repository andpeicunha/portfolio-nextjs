/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import TituloPaginas from "../component/tituloPage";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useConvertedDate from "../component/convertDate";

// ANIMAÇÃO FRAMER MOTION QUANDO A SECTION É CARREGADA
const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeOut", duration: 0.6, y: 0 },
  },
  hidden: { opacity: 0, scale: 0.8, y: 100 },
};

interface User {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image_90: string;
}

interface Article {
  id: string;
  title: string;
  published_timestamp: string;
  description: string;
  url: string;
  user: User;
}

const Blog: React.FC = () => {
  const [data, setData] = useState<Array<Article> | null>(null);
  const [error, setError] = useState<Error | null>(null);

  // chamada do axios para pegar os dados da API dev.to
  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=andpeicunha")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

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
      className="section-pages
      md:grid md:grid-cols-2"
    >
      {/* titulo página */}
      <TituloPaginas id="SECTION 3 - Artigos" numero="03" titulo="Artigos" />

      {error ? <p>Error: {error.message}</p> : null}
      <div className="grid md:grid-cols-2">
        {data ? (
          data.map((artc) => (
            <div
              key={artc.id}
              className="pt-2 bg-gradient-to-b from-sky-900 rounded-lg ml-0 m-3 p-6"
            >
              <a href={artc.url}>
                <div className="text-white font-bold text-xl pb-2">
                  {artc.title}
                </div>
              </a>
              <div className="text-white text-sm pb-3">{artc.description}</div>
              <div>
                <img
                  src={artc.user.profile_image_90}
                  alt="André Peixoto | Front End Developer"
                  className="rounded-full w-10 h-10"
                />
                <span></span>
              </div>
            </div>
          ))
        ) : (
          <p>Carregando Artigos...</p>
        )}
      </div>
    </motion.div>
  );
};

export default Blog;
