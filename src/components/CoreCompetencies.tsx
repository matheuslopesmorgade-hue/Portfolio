"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Briefcase, 
  Zap, 
  Layers, 
  GitMerge, 
  PieChart, 
  Target,
  ArrowRight
} from "lucide-react";

// --- DADOS DA SEÇÃO ---
const competencies = [
  {
    id: "dev",
    title: "Development Stack",
    desc: "Engenharia de front-end e back-end para construir sistemas escaláveis e responsivos.",
    icon: Code2,
    color: "text-tech-blue",
    bg: "bg-tech-blue/10",
    border: "group-hover:border-tech-blue/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,82,255,0.15)]",
    tags: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "APIs", "Git/GitHub", "UI Engineering"]
  },
  {
    id: "data",
    title: "Data & BI",
    desc: "Estruturação, análise e visualização visual de grandes volumes de dados de negócio.",
    icon: Database,
    color: "text-tech-emerald",
    bg: "bg-tech-emerald/10",
    border: "group-hover:border-tech-emerald/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    tags: ["SQL", "Power BI", "Excel Avançado", "Dashboards", "Data Modeling", "KPIs", "Analytics", "Indicadores Gerenciais"]
  },
  {
    id: "finance",
    title: "Finance & Strategy",
    desc: "Inteligência financeira aplicada ao planejamento, controle e modelagem de performance.",
    icon: Briefcase,
    color: "text-accent-rose",
    bg: "bg-accent-rose/10",
    border: "group-hover:border-accent-rose/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(229,192,161,0.15)]",
    tags: ["Fluxo de Caixa", "DRE", "Planejamento Financeiro", "Análise de Performance", "Orçamento", "Forecast", "Modelagem Financeira", "Tomada de Decisão"]
  },
  {
    id: "automation",
    title: "Automation & Systems",
    desc: "Otimização de rotinas e integração profunda de plataformas empresariais.",
    icon: Zap,
    color: "text-tech-purple",
    bg: "bg-tech-purple/10",
    border: "group-hover:border-tech-purple/50",
    glow: "group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]",
    tags: ["Automação de Processos", "ERP", "Sistemas Administrativos", "Workflows", "Integrações", "Process Mapping", "Business Rules", "Escalabilidade Operacional"]
  }
];

const intelligenceFlow = [
  { id: 1, title: "Input Operacional", icon: Layers, desc: "Coleta e padronização" },
  { id: 2, title: "Automação", icon: GitMerge, desc: "Processamento e orquestração" },
  { id: 3, title: "Dados Estruturados", icon: Database, desc: "Organização e consistência" },
  { id: 4, title: "Indicadores", icon: PieChart, desc: "Dashboards analíticos" },
  { id: 5, title: "Decisão Estratégica", icon: Target, desc: "Actionable insights" }
];

// --- VARIANTES DE ANIMAÇÃO ---
const premiumEase: any = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: premiumEase }
  },
};

const tagsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

const CoreCompetencies = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-deep-900 border-t border-white/[0.02] overflow-hidden">
      
      {/* Background & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] bg-tech-blue/[0.03] rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-accent-rose/[0.04] rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full max-w-7xl">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-glass">
            <span className="text-[11px] sm:text-xs text-accent-silver tracking-widest uppercase font-mono">Core Competencies</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Um stack orientado à <span className="text-gradient-tech">performance, automação e decisão.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg text-accent-silver/80 leading-relaxed font-light">
            Minha atuação combina ferramentas de desenvolvimento, análise de dados e inteligência financeira para estruturar soluções digitais mais eficientes, mensuráveis e escaláveis.
          </motion.p>
        </motion.div>

        {/* MATRIZ DE COMPETÊNCIAS (Grid 2x2) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24"
        >
          {competencies.map((comp) => (
            <motion.div 
              key={comp.id}
              variants={itemVariants}
              className={`group glass-card p-6 lg:p-8 border border-white/5 bg-deep-800/40 hover:bg-deep-800/60 transition-all duration-500 ease-out cursor-default ${comp.border} ${comp.glow} overflow-hidden relative`}
            >
              {/* Efeito de iluminação no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-5">
                  <div className={`p-3 rounded-xl border border-white/5 ${comp.bg} shadow-lg`}>
                    <comp.icon className={`w-6 h-6 ${comp.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-wide">{comp.title}</h3>
                </div>
                
                <p className="text-accent-silver/70 text-sm leading-relaxed mb-8">
                  {comp.desc}
                </p>

                {/* Tags Animadas */}
                <motion.div 
                  variants={tagsContainerVariants}
                  className="flex flex-wrap gap-2"
                >
                  {comp.tags.map((tag, idx) => (
                    <motion.span 
                      key={idx}
                      variants={tagVariants}
                      className="px-3 py-1.5 bg-deep-900/50 border border-white/5 rounded-md text-[11px] sm:text-xs text-accent-silver/80 group-hover:border-white/10 group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CAMADA DE INTELIGÊNCIA OPERACIONAL (Fluxo) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full"
        >
          <motion.h3 variants={itemVariants} className="text-center text-sm md:text-base font-mono uppercase tracking-widest text-accent-silver mb-10">
            <span className="opacity-50">{"///"}</span> Operational Intelligence Layer <span className="opacity-50">{"///"}</span>
          </motion.h3>

          <div className="glass-panel p-6 md:p-10 border border-white/5 bg-white/[0.01]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2">
              
              {intelligenceFlow.map((step, idx) => (
                <React.Fragment key={step.id}>
                  
                  <motion.div variants={itemVariants} className="flex flex-col items-center text-center w-full lg:w-40 group">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-deep-800 border border-white/10 flex items-center justify-center mb-4 relative group-hover:border-accent-rose/50 group-hover:shadow-[0_0_20px_rgba(229,192,161,0.2)] transition-all duration-300">
                      {/* Anel giratório sutil */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-white/10 group-hover:animate-spin-slow" style={{ animationDuration: '8s' }}></div>
                      <step.icon className="w-6 h-6 text-accent-silver group-hover:text-accent-rose transition-colors duration-300" />
                    </div>
                    <div className="text-sm font-semibold text-white mb-1 tracking-wide">{step.title}</div>
                    <div className="text-[10px] md:text-xs text-accent-silver/60 uppercase tracking-wider">{step.desc}</div>
                  </motion.div>

                  {/* Setas Conectoras (Ocultas no mobile, visíveis no desktop) */}
                  {idx < intelligenceFlow.length - 1 && (
                    <motion.div variants={itemVariants} className="hidden lg:flex items-center justify-center text-white/10">
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  )}
                  
                  {/* Linha vertical (Visível apenas no mobile/tablet) */}
                  {idx < intelligenceFlow.length - 1 && (
                    <motion.div variants={itemVariants} className="flex lg:hidden w-[1px] h-6 bg-gradient-to-b from-white/20 to-transparent my-2"></motion.div>
                  )}

                </React.Fragment>
              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CoreCompetencies;
