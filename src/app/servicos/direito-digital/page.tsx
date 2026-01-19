"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedNavbar } from "@/components/animations/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, CheckCircle2, Shield, FileText, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function DireitoDigitalPage() {
  const services = [
    "Adequação à LGPD (Lei Geral de Proteção de Dados)",
    "Consultoria em proteção de dados e privacidade",
    "Atuação como DPO (Encarregado de Proteção de Dados)",
    "Defesa em crimes cibernéticos",
    "Contratos de tecnologia e software",
    "Propriedade intelectual digital",
    "E-commerce e direito do consumidor digital",
    "Gestão de incidentes de segurança da informação",
    "Compliance digital e governança de dados",
    "Direito de imagem e reputação online",
  ];

  const expertise = [
    {
      icon: Shield,
      title: "LGPD e Privacidade",
      description: "Adequação completa à Lei Geral de Proteção de Dados, implementação de políticas e atuação como DPO."
    },
    {
      icon: FileText,
      title: "Crimes Cibernéticos",
      description: "Defesa e investigação de crimes virtuais, recuperação de ativos digitais e remoção de conteúdo ilícito."
    },
    {
      icon: Users,
      title: "Consultoria Digital",
      description: "Orientação estratégica em contratos de tecnologia, e-commerce e compliance digital."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <AnimatedNavbar />

      {/* Hero Section */}
      <section className="w-full pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-linear-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal delay={0.1}>
            <div className="mb-4">
              <Link href="/" className="text-sm text-[#27444C]600 hover:text-[#27444C]700 transition-colors">
                ← Voltar para home
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <span className="inline-block px-4 py-1.5 bg-teal-50 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: '#5A9FA9' }}>
              Área de Atuação
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 max-w-4xl">
              Direito <span className="font-semibold" style={{ color: '#5A9FA9' }}>Digital</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
              Proteção jurídica especializada para o ambiente digital, abrangendo LGPD, crimes cibernéticos, 
              contratos de tecnologia e segurança da informação.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#27444C' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Sobre a Área
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    O Direito Digital é uma área em constante evolução que regula as relações jurídicas 
                    que emergem do uso de tecnologias, internet, dados, plataformas digitais e inteligência 
                    artificial. Com a transformação digital acelerada, empresas e indivíduos enfrentam novos 
                    desafios jurídicos que exigem conhecimento especializado.
                  </p>
                  <p className="text-white/90 leading-relaxed mb-4">
                    A Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) é um pilar fundamental 
                    desta área, estabelecendo diretrizes rigorosas para o tratamento de dados pessoais no 
                    Brasil. Nossa equipe auxilia empresas na adequação completa à LGPD, implementando políticas 
                    de privacidade, segurança da informação e governança de dados.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    Também atuamos fortemente na defesa contra crimes cibernéticos, que incluem golpes digitais, 
                    invasão de contas, phishing, ransomware e vazamento de dados. Oferecemos suporte completo 
                    desde a investigação até a recuperação de ativos digitais e remoção de conteúdo ilícito.
                  </p>
                </div>
              </ScrollReveal>

              {/* Expertise Cards */}
              <ScrollReveal delay={0.2}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Nossa Expertise
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    {expertise.map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                        className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#27444C]500 transition-all"
                      >
                        <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                          <item.icon className="w-6 h-6 text-[#27444C]600" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Services List */}
              <ScrollReveal delay={0.3}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Serviços Oferecidos
                  </h2>
                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#27444C]500 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <ScrollReveal delay={0.4}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl p-8 text-white" style={{ backgroundColor: '#5A9FA9' }}
                  >
                    <h3 className="text-xl font-bold mb-3">
                      Precisa de Assessoria?
                    </h3>
                    <p className="text-white/90 text-sm mb-6">
                      Entre em contato com nossos especialistas em Direito Digital e LGPD.
                    </p>
                    <a href="https://wa.me/5562996370290" target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#1F3338' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-full text-white px-6 py-3 rounded-md font-medium shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                        style={{ backgroundColor: '#27444C' }}
                      >
                        <FaWhatsapp className="w-5 h-5" />
                        Falar com especialista
                      </motion.button>
                    </a>
                  </motion.div>
                </ScrollReveal>

                {/* Related Services */}
                <ScrollReveal delay={0.5}>
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Outras Áreas
                    </h3>
                    <div className="space-y-3">
                      <Link href="/servicos/direito-ambiental" className="block text-sm text-slate-600 hover:text-[#27444C]600 transition-colors">
                        Direito Ambiental
                      </Link>
                      <Link href="/servicos/direito-tributario" className="block text-sm text-slate-600 hover:text-[#27444C]600 transition-colors">
                        Direito Tributário
                      </Link>
                      <Link href="/servicos/direito-trabalhista" className="block text-sm text-slate-600 hover:text-[#27444C]600 transition-colors">
                        Direito Trabalhista
                      </Link>
                      <Link href="/areas-atuacao" className="block text-sm text-[#27444C]600 hover:text-[#27444C]700 font-medium transition-colors">
                        Ver todas as áreas →
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-6 text-white" style={{ backgroundColor: '#27444C' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <ScrollReveal delay={0.1} className="md:col-span-4 space-y-4">
              <Image
                src="/logosoufe.png"
                alt="Soufe Advogados"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-slate-400 text-sm leading-relaxed">
                Excelência jurídica e atendimento humanizado para proteger seus direitos com compromisso e transparência.
              </p>
            </ScrollReveal>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ScrollReveal delay={0.2}>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Serviços</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li><Link href="/areas-atuacao" className="hover:text-[#27444C]400 transition-colors">Direito Cível</Link></li>
                    <li><Link href="/areas-atuacao" className="hover:text-[#27444C]400 transition-colors">Direito Administrativo</Link></li>
                    <li><Link href="/areas-atuacao" className="hover:text-[#27444C]400 transition-colors">Direito Empresarial</Link></li>
                    <li><Link href="/areas-atuacao" className="hover:text-[#27444C]400 transition-colors">Direito Tributário</Link></li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Institucional</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li><Link href="/#sobre" className="hover:text-[#27444C]400 transition-colors">Sobre Nós</Link></li>
                    <li><Link href="/equipe" className="hover:text-[#27444C]400 transition-colors">Nossa Equipe</Link></li>
                    <li><Link href="/#contato" className="hover:text-[#27444C]400 transition-colors">Carreiras</Link></li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Contato</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-[#27444C]400 shrink-0 mt-0.5" />
                      <span>(62) 99637-0290</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-[#27444C]400 shrink-0 mt-0.5" />
                      <span>contato@soufeadvogados.com.br</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#27444C]400 shrink-0 mt-0.5" />
                      <span>Goiânia - GO</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <Separator className="bg-slate-800 mb-6 sm:mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400">
            <p className="text-center md:text-left">© 2026 Soufe Advogados. Todos os direitos reservados.</p>
            <a 
              href="https://www.linkedin.com/in/grlimaa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#27444C]400 transition-colors"
            >
              Design e desenvolvimento feitos por Garo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
