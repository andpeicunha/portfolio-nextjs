"use client";
import React, { useEffect } from "react";
import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Job } from "../component/jobs";
import TituloPaginas from "../component/tituloPage";

function SectionPageWork(props: { params?: any; searchParams?: any }) {
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
      className="section-pages
      md:grid md:grid-cols-2"
    >
      {/* titulo página */}
      <TituloPaginas
        id="SECTION 2 - WORK"
        numero="02"
        titulo="Onde Trabalhei"
      />

      {/* texto corpo */}

      <Job
        nomeEmpresa="Base Brasil"
        periodo="1998 a 2002"
        funcao="Web Designer"
        descricao="Esse foi minha <span class='text-verde-ti-vivo'>primeira experiência profissional com a internet</span>. 
        Inicialmente era responsável pelo tratamento de imagens para sites em diversos projetos e clientes. 
        <p/>Com cerca de 6 meses começei a <span class='text-verde-ti-vivo'>desenvolver para <b>Front-End</b></span>, 
        mas na época apenas com HTML e Javascript - <i class='font-serif'>acredite, o CSS mal era compatível com o IE.</i>"
        habilidades={["HTML", "Javascript", "Photoshop", "Corel Draw"]}
      />
      <Job
        nomeEmpresa="Grupo Store"
        periodo="2002 à 2008"
        funcao="Front-End Developer"
        descricao="De início era responsável pela manutenção e criação dos sites das cinco empresas do Grupo.<p/> 
        Também era responsável pelo Design UI dos sistemas legados, inicilamente eram todos desktop em VB.<p/> 
        Quando iniciamos a migração dos sistemas pra web, especialmente pra uso dos clientes, eu cuidava do Front-End e também Design UI."
        habilidades={[
          "CSS",
          "HTML",
          "Javascript",
          "Photoshop",
          "JQuery",
          "PMO",
          "Kanban",
          "Scrum",
        ]}
        funcao1="Project Manager"
        periodo1="2008 a 2010"
        descricao1="Devido ao tamanho de alguns projetos a empresa teve a iniciativa de criar um time de Projetos e fui convidado a gerenciar e coordenar essa fase.<p/>"
      />
      <Job
        nomeEmpresa="Estec Tecnologia"
        periodo="2011 a 2014"
        funcao="Sócio | Front-End Developer"
        descricao="Fui convidado como sócio pra desenvolver uma nova linha de produtos SaaS. <p/>
        A Estec já tinha uma sólida trajetória e know-how em sistemas para digitalização de documentos em grande escala (BPM), 
        especialmente em projetos governamentais, mas queria abrir uma nova linha de podutos para as PMEs. 
        <p/>
        Fui responsável por colaborar no desenvolvimento de novos produtos para digitalização, automação de processos e 
        gestão de documentos (BPM), especialmente em áreas como RH e Contábil.
        <p/>
        Também era responsável pelo desenvolvimento dos sites e Design UI/UX nessa nova linha de produtos."
        habilidades={[
          "CSS",
          "HTML",
          "Javascript",
          "Typescript",
          "Photoshop",
          "Adobe Cloud",
        ]}
      />
      <Job
        nomeEmpresa="Doce Affetto"
        periodo="2015 a 2022"
        funcao="Co-Founder | Front-End Developer"
        habilidades={[
          "HTML",
          "CSS",
          "Javascript",
          "Typescript",
          "Photoshop",
          "Figma",
          "React",
          "NextJS",
          "MySQL",
        ]}
        descricao="Fundamos em 2015, na cidade de Pouso Alegre/MG, e ao longo desses anos aprimorei minha experiência, especialmente em atividades extra-TI, no gerencimaneto de pessoas, tarefas, auto-gestão, foi um dos períodos de maior aprendizado na minha carreira.
        <p/>
        Era responsável pelo desenvolvimento e manutenção do e-commerce da loja e pelas automações na captura e gestão dos Leads.
        <p/>
        Ao longo desses anos, criamos um curso de formação para confeiteiras e como parte do material desenvolvemos um 
        sistema com base em ReactJS que era disponibilizado aos alunos com a finalidade de fornecer suporte para a correta precificação de produtos, análise de margens de distribuição e CMV. 
        <p/>
        O mais importante aprendizado nessa fase foi a auto-gestão. Aprender a priorizar tempo, tarefas, atividades, prazo."
      />
    </motion.div>
  );
}

export default SectionPageWork;
