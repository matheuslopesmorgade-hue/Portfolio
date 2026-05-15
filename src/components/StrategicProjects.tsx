"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, 
  BarChart2, 
  GitMerge, 
  Layers, 
  Target, 
  ArrowUpRight,
  TrendingUp
} from "lucide-react";

// --- DADOS DOS PROJETOS ---
const filters = ["All", "Systems", "BI", "Automation", "Analytics", "Finance"];

const projectsData = [
  {
    id: "p1",
    title: "Aureum ERP Intelligence",
    category: "Systems",
    desc: "Plataforma estratégica voltada à centralização operacional, indicadores gerenciais e automação de processos empresariais.",
    icon: Layers,
    color: "text-tech-blue",
    bg: "bg-tech-blue/10",
    border: "border-tech-blue/30",
    glow: "shadow-[0_0_30px_rgba(0,82,255,0.15)]",
    metrics: [
      { label: "Workflows", value: "42" },
      { label: "Eficiência", value: "+37%" },
      { label: "Módulos", value: "12" }
    ],
    size: "large" // Para o grid assimétrico
  },
  {
    id: "p2",
    title: "Financial Analytics Nexus",
    category: "Finance",
    desc: "Dashboard executivo para análise financeira, KPIs, fluxo de caixa, DRE e monitoramento de performance empresarial.",
    icon: TrendingUp,
    color: "text-accent-rose",
    bg: "bg-accent-rose/10",
    border: "border-accent-rose/30",
    glow: "shadow-[0_0_30px_rgba(229,192,161,0.15)]",
    metrics: [
      { label: "Precisão", value: "98%" },
      { label: "KPIs", value: "24" },
      { label: "Vol", value: "R$ 4.2M" }
    ],
    size: "normal"
  },
  {
    id: "p3",
    title: "Operational Flow Engine",
    category: "Automation",
    desc: "Sistema de automação operacional e integração entre departamentos administrativos, financeiros e estratégicos.",
    icon: GitMerge,
    color: "text-tech-purple",
    bg: "bg-tech-purple/10",
    border: "border-tech-purple/30",
    glow: "shadow-[0_0_30px_rgba(124,58,237,0.15)]",
    metrics: [
      { label: "Processos", value: "63" },
      { label: "Retrabalho", value: "-48%" },
      { label: "APIs", value: "8" }
    ],
    size: "normal"
  },
  {
    id: "p4",
    title: "Executive Decision Layer",
    category: "Analytics",
    desc: "Arquitetura visual para centralização de dados executivos e suporte à tomada de decisão orientada a indicadores.",
    icon: Target,
    color: "text-tech-emerald",
    bg: "bg-tech-emerald/10",
    border: "border-tech-emerald/30",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    metrics: [
      { label: "Decisões", value: "Agi." },
      { label: "Dados", value: "Realtime" }
    ],
    size: "normal"
  },
  {
    id: "p5",
    title: "Data Intelligence Command",
    category: "BI",
    desc: "Estrutura analítica voltada à organização de dados, visualização estratégica e construção de inteligência operacional.",
    icon: Database,
    color: "text-tech-blue",
    bg: "bg-tech-blue/10",
    border: "border-tech-blue/30",
    glow: "shadow-[0_0_30px_rgba(0,82,255,0.15)]",
    metrics: [
      { label: "Queries", value: "1.2k" },
      { label: "Latência", value: "12ms" }
    ],
    size: "normal"
  },
  {
    id: "p6",
    title: "Smart KPI Environment",
    category: "Analytics",
    desc: "Ambiente visual premium para acompanhamento de metas, indicadores e performance corporativa.",
    icon: BarChart2,
    color: "text-accent-rose",
    bg: "bg-accent-rose/10",
    border: "border-accent-rose/30",
    glow: "shadow-[0_0_30px_rgba(229,192,161,0.15)]",
    metrics: [
      { label: "Metas", value: "100%" },
      { label: "Tracking", value: "24/7" }
    ],
    size: "large"
  }
];

// --- VARIANTES ---
const premiumEase: any = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEase } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } }
};

// Componente Interno: Mini Dashboard Decorativo
const MiniDashboardContent = ({ type, colorClass }: { type: string, colorClass: string }) => {
  // Extrai a cor base para usar em hex ou tw
  const isBlue = colorClass.includes('tech-blue');
  const isRose = colorClass.includes('accent-rose');
  const isPurple = colorClass.includes('tech-purple');
  const isEmerald = colorClass.includes('tech-emerald');
  
  const strokeColor = isBlue ? '#0052FF' : isRose ? '#E5C0A1' : isPurple ? '#7C3AED' : '#10B981';

  return (
    <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-deep-800 to-transparent pointer-events-none flex items-end justify-center px-4 overflow-hidden opacity-40 group-hover:opacity-100 transition-opacity duration-700">
      
      {/* Variação 1: Gráfico de Linha */}
      {(isRose || isBlue) && type !== "Automation" && (
        <svg className="w-full h-24 preserve-3d" viewBox="0 0 100 50" preserveAspectRatio="none">
          <motion.path 
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2, ease: premiumEase }}
            d="M0,50 L10,35 L20,45 L30,25 L40,30 L50,15 L60,20 L70,5 L80,10 L90,0 L100,2"
            fill="none" stroke={strokeColor} strokeWidth="1.5" vectorEffect="non-scaling-stroke"
            className="drop-shadow-lg"
          />
          <path d="M0,50 L10,35 L20,45 L30,25 L40,30 L50,15 L60,20 L70,5 L80,10 L90,0 L100,2 L100,50 Z" fill={strokeColor} fillOpacity="0.1" />
        </svg>
      )}

      {/* Variação 2: Gráfico de Barras */}
      {(isEmerald || type === "BI") && (
        <div className="w-full h-20 flex items-end justify-between gap-1 pb-2">
          {[30, 50, 40, 70, 60, 90, 80, 100].map((h, i) => (
            <motion.div 
              key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ duration: 1, delay: i*0.1, ease: premiumEase }}
              className={`w-full rounded-t-sm ${colorClass.replace('text-', 'bg-')}`} style={{ opacity: 0.3 + (h/200) }}
            ></motion.div>
          ))}
        </div>
      )}

      {/* Variação 3: Network/Nodes */}
      {(isPurple || type === "Automation") && (
        <div className="w-full h-24 relative flex items-center justify-center">
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="20%" y1="50%" x2="50%" y2="20%" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
            <line x1="50%" y1="20%" x2="80%" y2="60%" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
            <line x1="20%" y1="50%" x2="80%" y2="60%" stroke={strokeColor} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
          </svg>
          <div className={`absolute left-[20%] top-[50%] w-2 h-2 rounded-full ${colorClass.replace('text-', 'bg-')} shadow-lg animate-pulse`}></div>
          <div className={`absolute left-[50%] top-[20%] w-3 h-3 rounded-full ${colorClass.replace('text-', 'bg-')} shadow-lg`}></div>
          <div className={`absolute left-[80%] top-[60%] w-2 h-2 rounded-full ${colorClass.replace('text-', 'bg-')} shadow-lg animate-pulse`}></div>
        </div>
      )}
    </div>
  );
};


const StrategicProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter(p => activeFilter === "All" || p.category === activeFilter);

  return (
    <section className="relative w-full py-24 lg:py-32 bg-deep-900 border-t border-white/[0.02] overflow-hidden">
      
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
        <div className="ambient-glow bg-tech-blue/[0.03] w-[40vw] h-[40vw] top-[10%] right-[10%]"></div>
        <div className="ambient-glow bg-accent-rose/[0.04] w-[50vw] h-[50vw] bottom-[-10%] left-[-10%]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-[1400px]">
        
        {/* CABEÇALHO */}
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-glass">
            <span className="text-[11px] sm:text-xs text-accent-silver tracking-widest uppercase font-mono">Strategic Projects Architecture</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Soluções construídas para <span className="text-gradient-tech">performance e escala.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-accent-silver/80 leading-relaxed font-light max-w-3xl">
            Projetos estruturados com foco em automação, analytics, eficiência operacional e integração profunda entre tecnologia, dados e tomada de decisão.
          </motion.p>
        </motion.div>

        {/* FILTROS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border 
                ${activeFilter === filter 
                  ? 'text-white border-white/20 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                  : 'text-accent-silver/60 border-transparent hover:text-white hover:border-white/10 hover:bg-white/5'
                }`}
            >
              {filter}
              {activeFilter === filter && (
                <motion.div layoutId="activeFilter" className="absolute inset-0 border border-white/30 rounded-full" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
              )}
            </button>
          ))}
        </motion.div>

        {/* GRID DE PROJETOS (Masonry Assymetric) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial="hidden" animate="show" exit="exit" variants={itemVariants}
                className={`group glass-card bg-deep-900/60 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden relative flex flex-col justify-between
                  ${project.size === 'large' ? 'lg:col-span-2' : 'col-span-1'}
                `}
              >
                {/* Glow Dinâmico de Fundo */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`}></div>
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${project.bg} z-0`}></div>

                {/* Header do Mini Produto */}
                <div className="relative z-10 p-6 md:p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl border border-white/5 ${project.bg} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <project.icon className={`w-5 h-5 ${project.color}`} />
                      </div>
                      <div>
                        <div className="text-[10px] text-accent-silver/60 font-mono uppercase tracking-widest mb-0.5">{project.category}</div>
                        <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide group-hover:text-accent-rose transition-colors duration-300">{project.title}</h3>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-deep-800/50 group-hover:bg-white/10 group-hover:rotate-45 transition-all duration-300 cursor-pointer">
                      <ArrowUpRight className="w-4 h-4 text-accent-silver group-hover:text-white" />
                    </div>
                  </div>
                  
                  <p className="text-sm text-accent-silver/70 leading-relaxed font-light mb-8 max-w-lg relative z-10">
                    {project.desc}
                  </p>

                  {/* KPIs Internos do Projeto */}
                  <div className="flex flex-wrap gap-4 relative z-10">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className={`text-lg font-bold tracking-tight ${project.color} opacity-90`}>{metric.value}</span>
                        <span className="text-[10px] text-accent-silver/50 uppercase tracking-widest">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Área Gráfica Inferior (Mockup Visual do Dashboard) */}
                <div className="relative h-32 md:h-40 border-t border-white/[0.02] bg-deep-800/20 mt-auto overflow-hidden">
                  {/* Status Bar Superior Mockup */}
                  <div className="absolute top-0 inset-x-0 h-6 border-b border-white/[0.02] bg-white/[0.01] flex items-center px-4 justify-between z-10">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                    </div>
                    <div className="text-[8px] font-mono text-accent-silver/30 tracking-widest">SYS.UI_RENDER</div>
                  </div>

                  <MiniDashboardContent type={project.category} colorClass={project.color} />
                  
                  {/* Overlay gradiente para misturar fundo do gráfico com a base do card */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-deep-900/80 to-transparent z-10"></div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default StrategicProjects;
