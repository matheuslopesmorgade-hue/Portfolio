"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, LineChart, PieChart, GitMerge } from "lucide-react";

// --- DADOS DA SEÇÃO ---
const cardsData = [
  { 
    title: "Technology Builder", 
    desc: "Desenvolvimento de soluções digitais, automações e sistemas voltados à eficiência operacional.", 
    icon: Code2, 
    color: "text-tech-blue", 
    border: "group-hover:border-tech-blue/50" 
  },
  { 
    title: "Financial Intelligence", 
    desc: "Leitura financeira, indicadores, fluxo de caixa, análise de performance e apoio à tomada de decisão.", 
    icon: LineChart, 
    color: "text-accent-rose", 
    border: "group-hover:border-accent-rose/50" 
  },
  { 
    title: "Business Analytics", 
    desc: "Transformação de dados operacionais em dashboards, métricas e inteligência gerencial.", 
    icon: PieChart, 
    color: "text-tech-emerald", 
    border: "group-hover:border-tech-emerald/50" 
  },
  { 
    title: "Process Architecture", 
    desc: "Organização de processos, padronização de rotinas e criação de fluxos mais escaláveis.", 
    icon: GitMerge, 
    color: "text-tech-purple", 
    border: "group-hover:border-tech-purple/50" 
  }
];

const timelineData = [
  { step: "01", label: "Administração & Operação" },
  { step: "02", label: "Finanças & Indicadores" },
  { step: "03", label: "Desenvolvimento & Automação" },
  { step: "04", label: "Dados & Business Intelligence" }
];

// --- VARIANTES DE ANIMAÇÃO ---
const premiumEase: any = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: premiumEase }
  },
};

const ExecutiveProfile = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-deep-900 border-t border-white/[0.02] overflow-hidden">
      
      {/* Background & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-accent-rose/[0.05] rounded-full blur-[140px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] bg-tech-blue/[0.05] rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="text-[11px] sm:text-xs text-accent-silver tracking-widest uppercase font-mono">Executive Profile</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Entre tecnologia, finanças e <span className="text-gradient-rose">inteligência operacional.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg text-accent-silver/80 leading-relaxed font-light">
            Minha atuação nasce da conexão entre desenvolvimento de sistemas, análise financeira, automação de processos e estruturação de indicadores para transformar dados dispersos em decisões mais claras, rápidas e estratégicas.
          </motion.p>
        </motion.div>

        {/* CONTEÚDO PRINCIPAL (Grid 2 colunas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Coluna Esquerda: Texto e Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <motion.div variants={itemVariants} className="prose prose-invert max-w-none text-accent-silver/70 mb-12 space-y-6 text-[15px] sm:text-base font-light leading-relaxed">
              <p>
                A tecnologia atinge seu verdadeiro potencial quando conectada à operação real do negócio. Com uma base sólida construída na prática de <strong>rotinas financeiras, controle orçamentário e modelagem de processos</strong>, desenvolvi uma visão sistêmica que me permite não apenas escrever código, mas desenhar soluções que impactam o resultado final.
              </p>
              <p>
                Minha especialidade é atuar como a ponte entre o <strong>estratégico, o analítico e o desenvolvimento</strong>. Através de ferramentas de Business Intelligence (BI), construção de dashboards, programação e orquestração de automações, eu elimino gargalos operacionais e traduzo fluxos complexos em plataformas intuitivas e performáticas.
              </p>
            </motion.div>

            {/* Grid de Cards Glassmorphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cardsData.map((card, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className={`group glass-panel p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 ease-out cursor-default ${card.border}`}
                >
                  <card.icon className={`w-6 h-6 mb-4 opacity-80 group-hover:opacity-100 transition-opacity ${card.color}`} />
                  <h3 className="text-white font-semibold text-lg mb-2 tracking-wide">{card.title}</h3>
                  <p className="text-accent-silver/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coluna Direita: Timeline Futurista */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-card w-full h-full p-8 sm:p-10 border border-white/5 bg-deep-800/30 relative overflow-hidden">
              {/* Efeito de brilho interno */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-tech-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

              <h3 className="text-accent-silver uppercase tracking-widest text-[11px] font-mono mb-12 opacity-80">
                Arquitetura de Trajetória //
              </h3>

              <div className="relative">
                {/* Linha vertical da timeline */}
                <div className="absolute left-[11px] top-2 bottom-4 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>

                {timelineData.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start mb-10 last:mb-0 relative group"
                  >
                    {/* Marcador */}
                    <div className="relative z-10 flex flex-col items-center mr-6">
                      <div className="w-6 h-6 rounded-full bg-deep-900 border border-white/20 flex items-center justify-center group-hover:border-tech-blue/50 group-hover:shadow-[0_0_15px_rgba(0,82,255,0.3)] transition-all duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-silver group-hover:bg-tech-blue transition-colors"></div>
                      </div>
                    </div>

                    {/* Conteúdo do Marcador */}
                    <div className="pt-0.5">
                      <div className="text-[10px] font-mono text-tech-blue mb-1 opacity-80">{item.step}</div>
                      <div className="text-white font-medium tracking-wide group-hover:text-accent-rose transition-colors duration-300">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decoração Tech (Fundo do Card) */}
              <div className="absolute bottom-6 right-6 flex items-center gap-1 opacity-20">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-4 h-[1px] bg-white"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExecutiveProfile;
