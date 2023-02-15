/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import TituloPaginas from "../component/tituloPage";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const variaveisAnimacaoMostraSection = {
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
      variants={variaveisAnimacaoMostraSection}
      className="section-pages
      md:grid"
    >
      {/* titulo página */}
      <TituloPaginas id="SECTION 3 - Artigos" numero="03" titulo="Artigos" />

      {error ? <p>Error: {error.message}</p> : null}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
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
                <Link
                  href={artc.url}
                  id="buttonLerArtigoCompleto"
                  title="Ler Artigo Completo"
                  className="cursor-pointers flex w-[38px] p-[0.5rem] mt-[-2.5rem] ml-[3.5rem] bg-blue-600/50 rounded-full text-white outline-none focus:ring-4 shadow-lg transform active:scale-90 transition-transform"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4 5.5h5a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Zm10 14c-.35 0-.687-.06-1-.17v.17a1 1 0 1 1-2 0v-.17c-.313.11-.65.17-1 .17H4a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h5a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3.5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6Zm-1-12v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2Zm-8 0h4v2H5v-2Zm10 0h4v2h-4v-2Zm4 3h-4v2h4v-2Zm-14 0h4v2H5v-2Zm14 3h-4v2h4v-2Zm-14 0h4v2H5v-2Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
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
