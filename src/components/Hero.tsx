"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  PieChart, 
  Briefcase, 
  Zap, 
  Layers,
  ArrowRight, 
  Activity, 
  CheckCircle2, 
  Cpu, 
  BarChart2,
  TerminalSquare
} from "lucide-react";

// --- DADOS PARA OS COMPONENTES ---
const tagsData = [
  { icon: Code2, label: "Desenvolvimento" },
  { icon: Briefcase, label: "Finanças" },
  { icon: Database, label: "Dados" },
  { icon: PieChart, label: "BI" },
  { icon: Zap, label: "Automação" },
  { icon: Layers, label: "Estratégia" }
];

const kpiData = [
  { icon: Activity, value: "R$ 1.2M", label: "Dados Analisados", color: "text-accent-rose", bg: "bg-accent-rose/10" },
  { icon: CheckCircle2, value: "98.4%", label: "Precisão Analítica", color: "text-tech-emerald", bg: "bg-tech-emerald/10" }
];

// --- VARIANTES DE ANIMAÇÃO PREMIUM ---
// Easing super suave estilo Apple/Linear
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

const panelVariants = {
  hidden: { opacity: 0, x: 40, filter: "blur(10px)" },
  show: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: premiumEase, delay: 0.3 }
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-deep-900 overflow-hidden pt-32 pb-20">
      
      {/* --- BACKGROUND CINEMATOGRÁFICO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid com máscara para desbotar nas bordas */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]"></div>
        
        {/* Glows Controlados (Profundidade) */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-tech-blue/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] bg-tech-purple/10 rounded-full blur-[140px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-accent-rose/[0.07] rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* --- COLUNA ESQUERDA: APRESENTAÇÃO --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start w-full"
          >
            {/* Badge Premium */}
            <motion.div variants={itemVariants} className="mb-8 inline-flex items-center space-x-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-glass">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-emerald"></span>
              </span>
              <span className="text-[13px] text-accent-silver font-medium tracking-wide">Disponível para projetos estratégicos</span>
            </motion.div>

            {/* Headline com forte hierarquia */}
            <motion.div variants={itemVariants} className="space-y-5 mb-8">
              <h2 className="text-xl md:text-2xl text-accent-rose font-medium tracking-wider uppercase text-sm">
                Matheus Lopes
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight text-white">
                Transformando tecnologia, dados e finanças em <span className="text-gradient-tech">decisões estratégicas.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-accent-silver/80 max-w-2xl leading-relaxed font-light">
                Desenvolvimento de sistemas, automação, business intelligence e inteligência financeira aplicados à construção de operações mais eficientes, analíticas e escaláveis.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 mb-10">
              <button className="btn-premium group flex items-center justify-center gap-2 text-white bg-white/[0.05] border-white/10 hover:border-accent-rose/50 shadow-glass sm:w-auto w-full">
                <span className="tracking-wide">Explorar Projetos</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm tracking-wide text-accent-silver hover:text-white transition-all duration-300 border border-transparent hover:border-white/10 hover:bg-white/[0.02] sm:w-auto w-full">
                Ver Competências
              </button>
            </motion.div>

            {/* Mini Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
              {tagsData.map((tag, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-deep-800/40 border border-white/5 rounded-md px-3 py-1.5 text-xs text-accent-silver/70 hover:text-accent-silver hover:bg-deep-700/50 hover:border-white/10 transition-all duration-300 cursor-default">
                  <tag.icon className="w-3.5 h-3.5 opacity-70" />
                  <span className="font-medium tracking-wide">{tag.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* --- COLUNA DIREITA: COMMAND CENTER --- */}
          <motion.div 
            variants={panelVariants}
            initial="hidden"
            animate="show"
            className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-xl mx-auto lg:mr-0 flex items-center justify-center perspective-1000 mt-12 lg:mt-0"
          >
            {/* Dashboard Principal Realista */}
            <motion.div 
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card w-full p-1 shadow-2xl border border-white/10 bg-deep-900/60 backdrop-blur-2xl rounded-2xl relative z-20 overflow-hidden group hover:border-white/20 transition-colors duration-500"
            >
              <div className="bg-deep-800/80 rounded-xl h-full p-5 sm:p-6 flex flex-col justify-between relative border border-white/5">
                
                {/* Header do Terminal */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <TerminalSquare className="w-4 h-4 text-tech-blue opacity-70" />
                    <span className="text-[11px] text-accent-silver font-mono tracking-widest uppercase opacity-70">Sys.Analytical_Core</span>
                  </div>
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-tech-emerald/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
                  </div>
                </div>

                {/* Conteúdo Analítico */}
                <div className="space-y-6 flex-1">
                  
                  {/* Gráfico Linear Fictício (Processamento Realista) */}
                  <div className="bg-deep-900/50 rounded-lg p-4 border border-white/5">
                    <div className="flex justify-between text-xs mb-3">
                      <span className="text-accent-silver/80 font-medium tracking-wide">Otimização Operacional</span>
                      <span className="text-tech-emerald font-mono">+32.5%</span>
                    </div>
                    
                    {/* Linha de Progresso com pontos magnéticos */}
                    <div className="relative h-[2px] w-full bg-deep-700/50 rounded-full mt-2">
                      <motion.div 
                        initial={{ width: "10%" }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 2, ease: premiumEase, delay: 0.8 }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-tech-blue via-tech-purple to-tech-blue rounded-full"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                      </motion.div>
                    </div>
                    
                    {/* Barras decorativas (simulando gráfico bar) */}
                    <div className="flex justify-between items-end h-8 mt-4 opacity-30 gap-1 px-1">
                      {[40, 25, 60, 30, 80, 45, 90, 65, 100, 75].map((h, i) => (
                        <div key={i} className="w-full bg-tech-blue rounded-t-[1px]" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>

                  {/* Microcards de KPI Internos */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {kpiData.map((kpi, idx) => (
                      <div key={idx} className="bg-deep-900/40 rounded-lg p-3 sm:p-4 border border-white/5 hover:bg-deep-900/60 hover:border-white/10 transition-all duration-300">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                          <div className={`p-1.5 rounded-md ${kpi.bg}`}>
                            <kpi.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${kpi.color}`} />
                          </div>
                        </div>
                        <div className="text-lg sm:text-2xl font-semibold text-white tracking-tight mb-1">{kpi.value}</div>
                        <div className="text-[10px] sm:text-xs text-accent-silver/60 uppercase tracking-wider">{kpi.label}</div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>

            {/* --- WIDGETS FLUTUANTES (Desconectados do card principal) --- */}
            
            {/* Widget 1: Automações (Superior Esquerdo) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-2 sm:-left-8 top-8 sm:top-16 glass-panel p-3 sm:p-4 z-30 shadow-2xl backdrop-blur-xl bg-deep-800/80 border border-white/10 w-40 sm:w-48"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-tech-purple/10 border border-tech-purple/20 rounded-lg shrink-0">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-tech-purple" />
                </div>
                <div>
                  <div className="text-sm sm:text-lg font-semibold text-white leading-tight">24<span className="text-tech-purple text-xs sm:text-sm ml-1">un</span></div>
                  <div className="text-[9px] sm:text-[10px] text-accent-silver/80 uppercase tracking-widest mt-0.5 leading-tight">Automações<br/>Mapeadas</div>
                </div>
              </div>
            </motion.div>

            {/* Widget 2: Dashboards (Inferior Direito) */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              className="absolute -right-2 sm:-right-8 bottom-8 sm:bottom-16 glass-panel p-3 sm:p-4 z-30 shadow-2xl backdrop-blur-xl bg-deep-800/80 border border-accent-rose/20 w-40 sm:w-48"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-accent-rose/10 border border-accent-rose/20 rounded-lg shrink-0">
                  <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5 text-accent-rose" />
                </div>
                <div>
                  <div className="text-sm sm:text-lg font-semibold text-white leading-tight">12<span className="text-accent-rose text-xs sm:text-sm ml-1">un</span></div>
                  <div className="text-[9px] sm:text-[10px] text-accent-silver/80 uppercase tracking-widest mt-0.5 leading-tight">Dashboards<br/>Estruturados</div>
                </div>
              </div>
            </motion.div>

            {/* Aneis Orbitais de Dados (Decoração de fundo do painel) */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-10 opacity-60">
              <div className="w-[80%] h-[80%] border border-white/[0.03] rounded-full border-dashed animate-glow-spin"></div>
              <div className="absolute w-[60%] h-[60%] border border-tech-blue/[0.05] rounded-full animate-glow-spin" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
