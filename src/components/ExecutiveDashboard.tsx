"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  TrendingUp, 
  Cpu, 
  Database, 
  Layers, 
  GitMerge, 
  BarChart2, 
  PieChart, 
  DollarSign, 
  Zap, 
  TerminalSquare,
  ArrowRight,
  Target
} from "lucide-react";

// --- DADOS DO DASHBOARD ---
const kpis = [
  { label: "Operational Efficiency", value: "+32%", trend: "up", color: "text-tech-emerald", bg: "bg-tech-emerald/10", icon: TrendingUp },
  { label: "Automated Processes", value: "24", trend: "neutral", color: "text-tech-blue", bg: "bg-tech-blue/10", icon: Cpu },
  { label: "Strategic Dashboards", value: "12", trend: "up", color: "text-tech-purple", bg: "bg-tech-purple/10", icon: PieChart },
  { label: "Financial Accuracy", value: "98%", trend: "up", color: "text-tech-emerald", bg: "bg-tech-emerald/10", icon: Target },
  { label: "Active Integrations", value: "8", trend: "up", color: "text-accent-rose", bg: "bg-accent-rose/10", icon: Zap }
];

const mockChartData = [20, 35, 25, 45, 60, 50, 75, 65, 85, 80, 100, 95];
const mockBarData = [40, 60, 30, 80, 50, 90, 70];

const automationNodes = [
  { label: "ERP Core", status: "online", x: "10%", y: "20%" },
  { label: "API Gateway", status: "online", x: "50%", y: "10%" },
  { label: "Data Warehouse", status: "sync", x: "90%", y: "30%" },
  { label: "BI Engine", status: "online", x: "70%", y: "80%" },
  { label: "N8N Webhooks", status: "online", x: "30%", y: "70%" }
];

const decisionPipeline = [
  { id: "01", label: "Input Data", icon: Database },
  { id: "02", label: "Automation", icon: GitMerge },
  { id: "03", label: "Analytics", icon: BarChart2 },
  { id: "04", label: "Strategy", icon: Target }
];

// --- VARIANTES DE ANIMAÇÃO ---
const premiumEase: any = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: premiumEase }
  }
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { 
    pathLength: 1, opacity: 1, 
    transition: { duration: 2, ease: premiumEase, delay: 0.5 }
  }
};

const ExecutiveDashboard = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-deep-900 border-t border-white/[0.02] overflow-hidden">
      
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-tech-blue/[0.04] rounded-full blur-[140px] mix-blend-screen"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-accent-rose/[0.03] rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60vw] h-[60vw] bg-tech-purple/[0.02] rounded-full blur-[200px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-[1400px]">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-glass">
            <span className="text-[11px] sm:text-xs text-accent-silver tracking-widest uppercase font-mono">Interactive Executive Dashboard</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Dados transformados em <span className="text-gradient-rose">inteligência operacional.</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-sm md:text-base lg:text-lg text-accent-silver/80 leading-relaxed font-light max-w-3xl">
            Visualização estratégica de indicadores financeiros, automações, performance operacional e analytics integrados em uma arquitetura orientada à tomada de decisão.
          </motion.p>
        </motion.div>

        {/* CONTAINER DO DASHBOARD (O "Terminal") */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-card w-full rounded-2xl md:rounded-3xl border border-white/10 bg-deep-900/40 backdrop-blur-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Header do Terminal (Mac/Bloomberg style) */}
          <div className="h-12 bg-deep-900/80 border-b border-white/5 flex items-center justify-between px-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-white/10"></div>
              <div className="w-3 h-3 rounded-full bg-white/10"></div>
              <div className="w-3 h-3 rounded-full bg-accent-rose/80 shadow-[0_0_8px_rgba(229,192,161,0.5)]"></div>
            </div>
            <div className="flex items-center space-x-2 opacity-60">
              <TerminalSquare className="w-4 h-4 text-tech-blue" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent-silver">C2_Analytical_Nexus_v4.0</span>
            </div>
            <div className="w-16 flex justify-end">
              <div className="w-2 h-2 rounded-full bg-tech-emerald animate-pulse"></div>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8 space-y-6">
            
            {/* A) KPI STRIP SUPERIOR */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {kpis.map((kpi, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-deep-800/50 border border-white/5 rounded-xl p-4 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-current ${kpi.color}`}></div>
                  <div className="flex items-start justify-between mb-3 relative z-10">
                    <div className={`p-2 rounded-lg ${kpi.bg} border border-white/5`}>
                      <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
                    </div>
                    {kpi.trend === "up" && <TrendingUp className={`w-3 h-3 ${kpi.color} opacity-70`} />}
                  </div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-white tracking-tight mb-0.5">{kpi.value}</div>
                    <div className="text-[10px] text-accent-silver/70 uppercase tracking-widest truncate">{kpi.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* B) MAIN GRID: Analytics & Finance */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Performance Analytics Panel (Main Chart) */}
              <motion.div variants={itemVariants} className="lg:col-span-8 bg-deep-800/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-30">
                  <div className="bg-grid-pattern w-full h-full absolute inset-0"></div>
                </div>
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-wide mb-1 flex items-center gap-2">
                      Performance Analytics
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-tech-blue/20 text-tech-blue border border-tech-blue/30 uppercase">Live</span>
                    </h3>
                    <p className="text-xs text-accent-silver/60">Consolidated operational efficiency & data throughput</p>
                  </div>
                  <div className="flex gap-2">
                    {["1W", "1M", "3M", "YTD"].map((filter, i) => (
                      <div key={i} className={`text-[10px] px-2 py-1 rounded cursor-pointer transition-colors ${i === 3 ? 'bg-white/10 text-white' : 'text-accent-silver/50 hover:bg-white/5'}`}>
                        {filter}
                      </div>
                    ))}
                  </div>
                </div>

                {/* SVG Line Chart Fictício */}
                <div className="h-48 md:h-64 w-full relative z-10 flex items-end pt-4 pb-2">
                  <div className="absolute inset-0 flex flex-col justify-between pt-4 pb-2 border-l border-white/5 pl-2">
                    {[100, 75, 50, 25, 0].map(y => (
                      <div key={y} className="w-full border-b border-white/[0.03] flex items-center justify-end pr-2 text-[9px] text-accent-silver/30 font-mono">
                        {y}k
                      </div>
                    ))}
                  </div>
                  
                  {/* Linha SVGs Simples */}
                  <svg className="w-full h-full overflow-visible preserve-3d" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0052FF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#0052FF" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#0052FF" />
                      </linearGradient>
                    </defs>
                    
                    {/* Caminho Prenchido */}
                    <motion.path 
                      d="M0,100 L0,80 L9,65 L18,75 L27,55 L36,40 L45,50 L54,25 L63,35 L72,15 L81,20 L90,0 L100,5 L100,100 Z"
                      fill="url(#chartGradient)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    
                    {/* Linha de Tendência */}
                    <motion.path 
                      variants={lineVariants}
                      d="M0,80 L9,65 L18,75 L27,55 L36,40 L45,50 L54,25 L63,35 L72,15 L81,20 L90,0 L100,5"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      className="drop-shadow-[0_0_8px_rgba(0,82,255,0.8)]"
                    />
                  </svg>
                  
                  {/* Pontos sobre a linha */}
                  <div className="absolute inset-0 flex justify-between items-end pb-2">
                    {mockChartData.map((val, i) => (
                      <div key={i} className="relative w-full h-full flex justify-center group cursor-pointer">
                        <div className="w-[1px] h-full bg-white/0 group-hover:bg-white/10 transition-colors"></div>
                        <motion.div 
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 1 + (i * 0.1) }}
                          className={`absolute bottom-[${val}%] w-2 h-2 rounded-full bg-tech-blue border border-deep-900 shadow-[0_0_10px_rgba(0,82,255,0.8)] ${i === mockChartData.length-2 ? 'bg-accent-rose shadow-[0_0_10px_rgba(229,192,161,0.8)]' : ''}`}
                          style={{ bottom: `${val}%` }}
                        >
                          {/* Tooltip on hover */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-deep-800 border border-white/10 px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                            Vol: {val}k
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Financial Operations Panel (Side Panel) */}
              <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Modulo Financeiro: Barras */}
                <div className="bg-deep-800/40 border border-white/5 rounded-2xl p-6 flex-1 hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent-rose" /> Financial Ops
                    </h3>
                    <span className="text-[10px] text-tech-emerald bg-tech-emerald/10 px-2 py-0.5 rounded border border-tech-emerald/20">+14.2% YoY</span>
                  </div>
                  
                  {/* Mini Gráfico de Barras */}
                  <div className="flex items-end justify-between h-24 gap-1.5 pt-2">
                    {mockBarData.map((h, i) => (
                      <div key={i} className="w-full bg-deep-900/80 rounded-t-sm h-full relative group">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1.5, ease: premiumEase, delay: 0.2 + (i*0.1) }}
                          className={`absolute bottom-0 w-full rounded-t-sm transition-colors ${i === mockBarData.length-1 ? 'bg-accent-rose' : 'bg-white/10 group-hover:bg-white/20'}`}
                        ></motion.div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] text-accent-silver/40 font-mono mt-2">
                    <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                  </div>
                </div>

                {/* Micro Analytics Card */}
                <div className="bg-gradient-to-br from-deep-800/60 to-deep-900/60 border border-accent-rose/10 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-rose/10 blur-2xl rounded-full translate-x-10 -translate-y-10"></div>
                  <div className="text-[10px] uppercase tracking-widest text-accent-silver/60 mb-1 font-mono relative z-10">Cash Flow Stability</div>
                  <div className="text-3xl font-bold text-white relative z-10">High</div>
                  <div className="mt-4 flex items-center text-[10px] text-accent-silver/50 relative z-10">
                    <Activity className="w-3 h-3 mr-1 text-accent-rose" /> Operating securely within margins
                  </div>
                </div>

              </motion.div>
            </div>

            {/* C) BOTTOM GRID: Automation Monitor & Pipeline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* System Automation Monitor */}
              <motion.div variants={itemVariants} className="bg-deep-800/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-tech-purple/20 transition-colors duration-500 min-h-[220px]">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-2 relative z-10">
                  <GitMerge className="w-4 h-4 text-tech-purple" /> System Automation Mesh
                </h3>
                <p className="text-[10px] text-accent-silver/50 mb-6 relative z-10">Real-time workflow integration tracking</p>
                
                {/* Node Map Fictício */}
                <div className="absolute inset-0 top-16 opacity-60">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <motion.line x1="10%" y1="20%" x2="50%" y2="10%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
                    <motion.line x1="50%" y1="10%" x2="90%" y2="30%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
                    <motion.line x1="50%" y1="10%" x2="70%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.4 }} />
                    <motion.line x1="10%" y1="20%" x2="30%" y2="70%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.6 }} />
                    <motion.line x1="30%" y1="70%" x2="70%" y2="80%" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.8 }} />
                  </svg>
                  
                  {automationNodes.map((node, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", delay: 1 + (i*0.1) }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                      style={{ left: node.x, top: node.y }}
                    >
                      <div className={`w-3 h-3 rounded-full border border-white/20 mb-1 relative ${node.status === 'online' ? 'bg-tech-blue shadow-[0_0_10px_rgba(0,82,255,0.5)]' : 'bg-accent-rose shadow-[0_0_10px_rgba(229,192,161,0.5)] animate-pulse'}`}>
                        {node.status === 'online' && <div className="absolute inset-0 bg-tech-blue rounded-full animate-ping opacity-30"></div>}
                      </div>
                      <span className="text-[8px] bg-deep-900/80 px-1 py-0.5 rounded font-mono text-accent-silver/80 whitespace-nowrap border border-white/5">{node.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decision Flow Map (Pipeline) */}
              <motion.div variants={itemVariants} className="bg-deep-800/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group hover:border-white/10 transition-colors">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-8 relative z-10">
                  <Layers className="w-4 h-4 text-accent-silver" /> Decision Architecture Pipeline
                </h3>

                <div className="flex items-center justify-between relative z-10">
                  {decisionPipeline.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center text-center group/step">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-deep-900/80 border border-white/10 flex items-center justify-center mb-3 relative group-hover/step:border-accent-rose/50 group-hover/step:bg-accent-rose/5 transition-all duration-300 shadow-glass">
                          <div className="absolute -top-2 -right-2 text-[8px] font-mono text-accent-silver/40">{step.id}</div>
                          <step.icon className="w-4 h-4 md:w-5 md:h-5 text-accent-silver group-hover/step:text-accent-rose transition-colors" />
                        </div>
                        <span className="text-[9px] md:text-[10px] text-accent-silver/70 font-medium uppercase tracking-wider max-w-[60px] leading-tight">{step.label}</span>
                      </div>
                      
                      {idx < decisionPipeline.length - 1 && (
                        <div className="flex-1 flex items-center justify-center px-1 md:px-2">
                          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
                            <motion.div 
                              initial={{ x: "-100%" }}
                              whileInView={{ x: "200%" }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: idx * 0.5 }}
                              className="absolute top-[-1px] left-0 w-4 h-[3px] bg-accent-rose/50 blur-[1px] rounded-full"
                            ></motion.div>
                          </div>
                          <ArrowRight className="w-3 h-3 text-white/20 absolute" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveDashboard;
