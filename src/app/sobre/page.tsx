"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedNavbar } from "@/components/animations/navbar";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Target, Users, Award, Scale, Heart, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function SobrePage() {
  const values = [
    {
      icon: Scale,
      title: "Ética e Transparência",
      description: "Atuamos com integridade absoluta, mantendo transparência em todas as nossas relações e processos."
    },
    {
      icon: Heart,
      title: "Compromisso com o Cliente",
      description: "Colocamos as necessidades dos nossos clientes em primeiro lugar, oferecendo atendimento personalizado."
    },
    {
      icon: Award,
      title: "Excelência Jurídica",
      description: "Buscamos constantemente a excelência técnica e a atualização nas áreas do direito em que atuamos."
    },
    {
      icon: Shield,
      title: "Responsabilidade Social",
      description: "Comprometidos com a justiça social e o desenvolvimento sustentável da comunidade."
    },
  ];

  const differentials = [
    "Equipe multidisciplinar altamente qualificada",
    "Atendimento humanizado e personalizado",
    "Soluções jurídicas inovadoras e eficientes",
    "Acompanhamento transparente de processos",
    "Consultoria preventiva e estratégica",
    "Compromisso com resultados",
  ];

  return (
    <div className="min-h-screen bg-background">
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
              Conheça o Escritório
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 max-w-4xl">
              Sobre <span className="font-semibold" style={{ color: '#5A9FA9' }}>Nós</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
              Somos um escritório de advocacia comprometido com a excelência jurídica e o atendimento 
              humanizado, oferecendo soluções personalizadas para cada cliente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#27444C' }}>
        <div className="container mx-auto max-w-6xl">
          {/* Nossa História */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#27444C]600" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Nossa História
                  </h2>
                </div>
                <p className="text-white/90 leading-relaxed">
                  O Soufe Advogados nasceu da visão de criar um escritório que combinasse expertise jurídica 
                  de alto nível com um atendimento verdadeiramente humanizado. Desde nossa fundação, temos o 
                  compromisso de oferecer soluções jurídicas eficientes e personalizadas.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Nossa trajetória é marcada pela dedicação em compreender profundamente as necessidades de 
                  cada cliente, seja pessoa física ou jurídica, e pela busca constante por resultados que 
                  superem expectativas.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Ao longo dos anos, construímos uma reputação sólida baseada em ética, transparência e 
                  excelência técnica, tornando-nos referência em diversas áreas do direito.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-teal-500 to-teal-600 opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-32 h-32 text-[#27444C]500 opacity-20" strokeWidth={1} />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="mb-20">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                Missão, Visão e Valores
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.2}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#27444C]500 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-[#27444C]600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Missão</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Oferecer serviços jurídicos de excelência com atendimento humanizado, protegendo os 
                    direitos e interesses de nossos clientes com ética e compromisso.
                  </p>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#27444C]500 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-6">
                    <Award className="w-6 h-6 text-[#27444C]600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Visão</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ser reconhecido como referência em advocacia consultiva e contenciosa, destacando-se 
                    pela qualidade técnica e relacionamento próximo com os clientes.
                  </p>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#27444C]500 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6 text-[#27444C]600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Valores</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ética, transparência, compromisso com o cliente, excelência jurídica e responsabilidade 
                    social são os pilares que guiam nossa atuação.
                  </p>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>

          {/* Nossos Valores Detalhados */}
          <div className="mb-20">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                Nossos Valores
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={0.1 * (index + 1)}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-[#27444C]500 transition-all"
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-[#27444C]600" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Nossos Diferenciais */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <ScrollReveal delay={0.1}>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Nossos Diferenciais
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-8">
                    O que nos torna únicos é a combinação de expertise técnica com um atendimento que 
                    valoriza cada cliente como único. Nosso compromisso vai além da prestação de serviços 
                    jurídicos – construímos parcerias duradouras.
                  </p>
                  <Link href="/equipe">
                    <motion.button whileHover={{ scale: 1.05, backgroundColor: '#4A8A94' }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="px-6 py-3 rounded-md font-medium shadow-lg flex items-center gap-2 cursor-pointer text-white" style={{ backgroundColor: '#5A9FA9' }}>
                      <Users className="w-4 h-4" />
                      Conheça nossa equipe
                    </motion.button>
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200">
                  <div className="space-y-4">
                    {differentials.map((differential) => (
                      <div key={differential} className="flex items-start gap-3">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#27444C]" />
                        </div>
                        <p className="text-slate-600 leading-relaxed">{differential}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* CTA Section */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ backgroundColor: '#5A9FA9' }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Vamos conversar sobre seu caso?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar você ou sua empresa 
                com soluções jurídicas personalizadas.
              </p>
              <a href="https://wa.me/5562996370290" target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.05, backgroundColor: '#1F3338' }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="text-white px-6 py-3 rounded-md font-medium shadow-lg flex items-center gap-2 mx-auto cursor-pointer" style={{ backgroundColor: '#27444C' }}>
                  <FaWhatsapp className="w-5 h-5" />
                  Falar com especialista
                </motion.button>
              </a>
            </div>
          </ScrollReveal>
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
                    <li><Link href="/servicos/direito-ambiental" className="hover:text-[#27444C]400 transition-colors">Direito Ambiental</Link></li>
                    <li><Link href="/servicos/direito-digital" className="hover:text-[#27444C]400 transition-colors">Direito Digital</Link></li>
                    <li><Link href="/servicos/direito-tributario" className="hover:text-[#27444C]400 transition-colors">Direito Tributário</Link></li>
                    <li><Link href="/areas-atuacao" className="hover:text-[#27444C]400 transition-colors font-medium">Ver todas →</Link></li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Institucional</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li><Link href="/sobre" className="hover:text-[#27444C]400 transition-colors">Sobre Nós</Link></li>
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
