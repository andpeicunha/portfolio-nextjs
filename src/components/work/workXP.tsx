'use client';
import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Job } from '../jobs';
import TituloPaginas from '../tituloPage';

function SectionPageWork() {
  const squareVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: 'easeOut', duration: 0.6, y: 0 },
    },
    hidden: { opacity: 0, scale: 0.8, y: 100 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
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
        titulo="My Work Experience"
      />

      {/* texto corpo */}

      <Job
        nomeEmpresa="Doce Affetto"
        periodo="2015 a 2022"
        funcao="Front-End Senior | UX/UI"
        habilidades={[
          'React',
          'NextJs',
          'Design UI/UX',
          'HTML',
          'CSS | SCSS | Tailwind',
          'ES6+ | Typescript ',
          'API Rest',
          'Photoshop | Figma',
          'MongoDB | Firebase',
          'MySQL',
        ]}
        descricao="
        Fui responsável pela criação e manutenção do site e das páginas de lançamento de produtos sazonais, em React e NextJs.
        <p>Cuidava da estratégia de SEO, Ranking Page e demais otimizações (Tag Manager, Analytics). A/B Testing e otimizações de desempenho.
        <p>Desenvolvia e monitorava as integrações via Integromat/Make com sistemas terceiros e também a integração de mensagerias via API com o WhatsGw.
        "
      />

      <Job
        nomeEmpresa="Chef Joice Rodrigues"
        periodo="2020 a 2022"
        funcao="Front-End Senior | UI/UX (Freelancer)"
        descricao="
        Fui responsável pelo desenvolvimento das campanhas de lançamento dos cursos e da plataforma dos alunos para precificação e gestão das fichas técnicas.
        <p>Minhas responsabilidades envolviam:<p/>
        <ul>
          <li>- Protótipo e codificação dos Sites, Landing Pagese</li>
          <li>- Gestão de Ads das campanhas pelo Google e Facebook</li>
          <li>- Google Tag Manager e Analytics</li>
          <li>- Integrações com Integromat/Make via API com sistemas terceiros.</li>
        </ul>"
        habilidades={[
          'HTML',
          'CSS | JQuery',
          'Javascript',
          'Design UX/UI',
          'Photoshop',
          'Adobe Cloud',
        ]}
      />

      <Job
        nomeEmpresa="Estec Tecnologia"
        periodo="2011 a 2014"
        funcao="Front-End Developer | Design UX/UI | Pre-Sales Specialist"
        descricao="
        Responsabilidades:
        <ul>
          <li>- Levantamento de requisitos, melhorias e oportunidades de negócio nos produtos</li>
          <li>- Desenvolvimento de PoC (Prova de Conceito)</li>
          <li>- Elaboração do escopo, backlog e documentação</li>
          <li>- Pesquisa de novas tecnologias e integrações</li>
          <li>- Desenvolvimento e teste de novas features</li>
          <li>- Acompanhamento e implantação de novos clientes</li>
          <li>- Prototipação e desenvolvimento de sites e landing pages</li>
        </ul>
        <p>
        Fui convidado para participar do desenvolvimento de um novo sistema para o mercado de PME com foco na gestão e digitalização de documentos chamado e2Content e também na plataforma de avaliação de alunos do ensino médio (e2Avalia).
        <p>
        Atuei como Design UI/UX na prototipação, pesquisa e testes de usabilidade na fase inicial do projeto e como dev Front-End, cuidando da revisão das features, testes, documentação."
        habilidades={[
          'HTML',
          'CSS | JQuery',
          'Javascript',
          'Design UX/UI',
          'Photoshop',
          'Adobe Cloud',
        ]}
      />
      <Job
        nomeEmpresa="Grupo Store"
        periodo="2002 à 2008"
        funcao="Front- End Developer | Tech Lead | Project ManagerFront"
        descricao="De início era responsável pela manutenção e criação dos sites das cinco empresas do Grupo.<p/>
        Também era responsável pelo Design UI dos sistemas legados, inicilamente eram todos desktop em VB.<p/>
        Quando iniciamos a migração dos sistemas pra web, especialmente pra uso dos clientes, eu cuidava do Front-End e também Design UI."
        habilidades={[
          'CSS',
          'HTML',
          'Javascript',
          'Photoshop',
          'JQuery',
          'Design UX/UI',
          'Kanban',
          'PMO',
          'Scrum',
        ]}
        funcao1="Project Manager"
        periodo1="2008 a 2010"
        descricao1="Devido ao tamanho de alguns projetos a empresa teve a iniciativa de criar um time de Projetos e fui convidado a gerenciar e coordenar essa fase.<p/>"
      />
      <Job
        nomeEmpresa="Base Brasil"
        periodo="1998 a 2002"
        funcao="Web Designer"
        descricao="Esse foi minha <span>primeira experiência profissional com a internet</span>.
        Inicialmente era responsável pelo tratamento de imagens para sites em diversos projetos e clientes.
        <p/>Com cerca de 6 meses começei a <span>desenvolver para <b>Front-End</b></span>,
        mas na época apenas com HTML e Javascript - <i class='font-serif'>acredite, o CSS mal era compatível com o IE.</i>"
        habilidades={['HTML', 'Javascript', 'Photoshop', 'Corel Draw']}
      />
    </motion.div>
  );
}

export default SectionPageWork;
