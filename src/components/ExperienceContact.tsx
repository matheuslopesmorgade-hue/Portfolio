"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  PieChart, 
  Zap, 
  Target, 
  Mail, 
  MessageCircle,
  ArrowRight
} from "lucide-react";

// --- DADOS DA TIMELINE ---
const experienceData = [
  {
    year: "01",
    title: "Administração & Rotinas Financeiras",
    desc: "Atuação prática em organização financeira, controle de informações, rotinas administrativas e apoio à gestão operacional.",
    icon: Briefcase,
    color: "text-accent-rose",
    bg: "bg-accent-rose/10"
  },
  {
    year: "02",
    title: "Análise de Indicadores & Business Intelligence",
    desc: "Estruturação de métricas, dashboards, indicadores gerenciais e relatórios para tomada de decisão.",
    icon: PieChart,
    color: "text-tech-emerald",
    bg: "bg-tech-emerald/10"
  },
  {
    year: "03",
    title: "Desenvolvimento de Sistemas & Automação",
    desc: "Criação de soluções digitais, automações, interfaces e estruturas voltadas à eficiência de processos.",
    icon: Zap,
    color: "text-tech-blue",
    bg: "bg-tech-blue/10"
  },
  {
    year: "04",
    title: "Estratégia Empresarial & Operações Inteligentes",
    desc: "Integração entre visão de negócio, tecnologia, dados e performance operacional.",
    icon: Target,
    color: "text-tech-purple",
    bg: "bg-tech-purple/10"
  }
];

// --- VARIANTES ---
const premiumEase: any = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } }
};

const ExperienceContact = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-deep-900 border-t border-white/[0.02] overflow-hidden">
      
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.12]"></div>
        <div className="ambient-glow bg-accent-rose/[0.04] w-[40vw] h-[40vw] top-[20%] left-[-10%] mix-blend-screen"></div>
        <div className="ambient-glow bg-tech-blue/[0.04] w-[50vw] h-[50vw] bottom-[-10%] right-[-10%] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        
        {/* CABEÇALHO */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-glass">
            <span className="text-[11px] sm:text-xs text-accent-silver tracking-widest uppercase font-mono">Experience Interface</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Trajetória orientada por <span className="text-gradient-rose">operação, tecnologia e decisão.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-accent-silver/80 leading-relaxed font-light">
            Uma evolução profissional construída na interseção entre finanças, sistemas, automação e inteligência empresarial.
          </motion.p>
        </motion.div>

        {/* TIMELINE EXECUTIVA */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="relative mb-32"
        >
          {/* Linha central da timeline (visível no desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

          <div className="space-y-6 md:space-y-12">
            {experienceData.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className={`relative flex flex-col md:flex-row items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Marcador Central */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-deep-900 border border-white/20 rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <div className="w-1.5 h-1.5 bg-accent-silver rounded-full"></div>
                </div>

                {/* Conteúdo do Card */}
                <div className={`w-full md:w-[45%] flex ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="glass-card w-full p-6 sm:p-8 bg-deep-800/40 hover:bg-deep-800/60 border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden text-left">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className={`p-2.5 rounded-lg border border-white/5 ${item.bg} group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="text-[10px] font-mono text-accent-silver/40 group-hover:text-accent-silver/80 transition-colors uppercase tracking-widest border border-white/5 px-2 py-0.5 rounded">
                        Fase {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide mb-3 relative z-10">{item.title}</h3>
                    <p className="text-sm text-accent-silver/60 leading-relaxed font-light relative z-10">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CONTACT INTERFACE (Command Center CTA) */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="w-full relative"
        >
          <div className="glass-panel relative overflow-hidden bg-gradient-to-br from-deep-800/80 to-deep-900/90 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            
            {/* Efeitos do Painel */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-tech-blue/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent-rose/20 blur-[100px] rounded-full"></div>

            <motion.div variants={itemVariants} className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl border border-white/10 mb-2">
                <Target className="w-6 h-6 text-accent-rose" />
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Vamos construir sistemas, dados e decisões mais <span className="text-gradient-tech">inteligentes?</span>
              </h2>
              <p className="text-sm md:text-base text-accent-silver/70 font-light leading-relaxed px-4">
                Disponível para projetos estratégicos, desenvolvimento de soluções, automações, dashboards e iniciativas de inteligência operacional.
              </p>
            </motion.div>

            {/* Ações / Botões */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <button className="w-full sm:w-auto btn-premium bg-white/10 border border-white/20 hover:border-accent-rose/50 hover:bg-white/15 text-white flex items-center justify-center gap-2 px-8 py-3.5 group shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(229,192,161,0.2)]">
                <MessageCircle className="w-4 h-4 text-accent-rose group-hover:animate-bounce" />
                <span className="font-medium tracking-wide">Iniciar Projeto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a href="https://linkedin.com/in/matheuslopesmorgade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex-1 sm:flex-none flex items-center justify-center p-3.5 rounded-full bg-deep-900 border border-white/10 hover:border-tech-blue/50 hover:bg-white/5 text-accent-silver hover:text-tech-blue transition-all duration-300 group shadow-glass">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/lopes0910" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex-1 sm:flex-none flex items-center justify-center p-3.5 rounded-full bg-deep-900 border border-white/10 hover:border-white/30 hover:bg-white/5 text-accent-silver hover:text-white transition-all duration-300 group shadow-glass">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="mailto:matheus.salgueiro@soulasalle.com.br" aria-label="Enviar Email" className="flex-1 sm:flex-none flex items-center justify-center p-3.5 rounded-full bg-deep-900 border border-white/10 hover:border-accent-rose/50 hover:bg-white/5 text-accent-silver hover:text-accent-rose transition-all duration-300 group shadow-glass">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Rodapé / Status */}
            <motion.div variants={itemVariants} className="relative z-10 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-accent-silver/40 font-mono tracking-widest uppercase">
              <div className="flex items-center gap-2 mb-4 sm:mb-0">
                <div className="w-1.5 h-1.5 rounded-full bg-tech-emerald animate-pulse"></div>
                System Online
              </div>
              <div className="flex gap-4">
                <span className="hover:text-accent-silver/80 cursor-pointer transition-colors">matheus.salgueiro@soulasalle.com.br</span>
              </div>
              <div className="hidden md:block">
                SYS.V_4.0
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceContact;
