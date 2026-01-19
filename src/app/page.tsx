"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Briefcase, BookOpen, Award, Users, Shield, Scale, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedNavbar } from "@/components/animations/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <AnimatedNavbar />

      {/* Hero Section - Desktop: Image-based, Mobile: Clean typography */}
      <section className="w-full pt-20 pb-8 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Desktop Hero - Image-based */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden md:block relative w-full h-[569px] overflow-hidden rounded-3xl"
            style={{
              clipPath: 'inset(0 0 0 0 round 24px)'
            }}
          >
            <Image
              src="/bg_crop.png"
              alt="Soufe Advogados"
              fill
              className="object-cover"
              priority
            />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute font-normal"
              style={{
                top: '72px',
                left: '54px',
                color: '#E4E4E7',
                fontFamily: 'DM Sans',
                fontSize: '64px',
                fontWeight: 400,
                lineHeight: '120%',
                letterSpacing: '-2.16px',
                maxWidth: '800px'
              }}
            >
                Atuação no direito cível, administrativo, empresarial e tributário
              </motion.h1>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 right-0 rounded-tl-2xl rounded-bl-2xl flex flex-col justify-center p-6" 
              style={{ width: 'calc(37% - 24px)', height: 'calc(38.25% + 8px)', backgroundColor: '#5A9FA9' }}
            >
              <p className="text-xs leading-relaxed mb-18 text-white">
                Nossos advogados são selecionados por competência e experiência consolidada. Cada membro traz expertise especializada e dedicação genuína aos interesses dos clientes com atendimento humanizado.
              </p>
              <Link href="/equipe">
                <Button className="bg-white hover:bg-slate-100 text-xs w-fit px-3 py-2 hover:scale-105 transition-transform" style={{ color: '#27444C' }}>
                  Conhecer equipe →
                </Button>
              </Link>
            </motion.div>


          </motion.div>
          {/* Mobile Hero - Simplified */}
          <div 
            className="md:hidden py-20 min-h-[85vh] rounded-3xl overflow-hidden px-6 relative"
            style={{
              backgroundImage: 'url(/bg_hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" style={{ zIndex: 0 }} />
            
            {/* Content */}
            <div className="relative h-full" style={{ zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-0"
              >
                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl sm:text-5xl font-normal text-white"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: 400,
                    lineHeight: '120%',
                    letterSpacing: '-2.16px'
                  }}
                >
                  Atuação no direito cível, administrativo, empresarial e tributário
                </motion.h1>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-6 left-0 right-0 px-6"
                >
                  <a href="https://wa.me/5562996370290" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: '#4A8A94' }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="w-full text-white font-semibold px-8 py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 cursor-pointer text-lg"
                      style={{ backgroundColor: '#5A9FA9' }}
                    >
                      <FaWhatsapp className="w-6 h-6" />
                      Falar com especialista
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 sm:py-16 md:py-20 px-6" style={{ backgroundColor: '#27444C' }}>
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ color: '#5A9FA9' }}>
                SOBRE NÓS
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4 text-white">
              Nosso compromisso é a <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-semibold"
                style={{ color: '#5A9FA9' }}
              >defesa dos seus direitos</motion.span> com uma equipe de <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="font-semibold"
                style={{ color: '#5A9FA9' }}
              >especialistas</motion.span>.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <ScrollReveal delay={0.3} className="flex-1 w-full">
              <div
                className="rounded-xl p-6 sm:p-8 md:p-10 min-h-[200px] bg-white"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 h-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center text-center sm:text-left"
                  >
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 tracking-wide">Advogados especializados</p>
                    <p className="text-5xl sm:text-6xl md:text-7xl font-light" style={{ color: '#5A9FA9', letterSpacing: '-2.16px', lineHeight: '1.2' }}>10</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center text-center sm:text-left"
                  >
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 tracking-wide">Anos de experiência</p>
                    <p className="text-5xl sm:text-6xl md:text-7xl font-light" style={{ color: '#5A9FA9', letterSpacing: '-2.16px', lineHeight: '1.2' }}>10</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center text-center sm:text-left"
                  >
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 tracking-wide">Casos em atendimento</p>
                    <p className="text-5xl sm:text-6xl md:text-7xl font-light" style={{ color: '#5A9FA9', letterSpacing: '-2.16px', lineHeight: '1.2' }}>10k</p>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="w-full lg:w-[400px] space-y-8 sm:space-y-12 md:space-y-24 flex flex-col">
              <p className="text-white leading-relaxed text-sm">
                Nossos advogados são selecionados por competência e experiência consolidada. Cada membro traz expertise especializada e dedicação genuína aos interesses dos clientes com atendimento humanizado.
              </p>
              <Link href="/sobre">
                <Button className="text-xs sm:text-sm px-6 py-3 rounded-lg w-full sm:w-fit hover:scale-105 transition-transform bg-white hover:bg-slate-100" style={{ color: '#27444C' }}>
                  Conhecer mais →
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quem Somos - Detailed Section */}
      <section id="sobre" className="py-12 sm:py-16 md:py-20 px-6" style={{ backgroundColor: '#27444C' }}>
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase" style={{ color: '#5A9FA9' }}>
                QUEM SOMOS
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-center mb-8 sm:mb-12 max-w-4xl mx-auto px-4 text-white">
              Advocacia de <span className="font-semibold" style={{ color: '#5A9FA9' }}>excelência</span> com atendimento <span className="font-semibold" style={{ color: '#5A9FA9' }}>humanizado</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
              O escritório Soufe Advogados está preparado para atender suas expectativas e demandas em diversas áreas do direito, 
              oferecendo soluções jurídicas estratégicas e personalizadas para cada cliente.
            </p>
          </ScrollReveal>

          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
            <ScrollReveal delay={0.4}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white p-6 sm:p-8 rounded-xl border-2 border-slate-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#5A9FA9" }}>
                  <Shield className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: '#27444C' }}>Missão</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Oferecer soluções jurídicas eficientes e personalizadas, defendendo os direitos de nossos clientes 
                  com ética, transparência e comprometimento.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white p-6 sm:p-8 rounded-xl border-2 border-slate-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#5A9FA9" }}>
                  <Award className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: '#27444C' }}>Visão</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ser referência em advocacia especializada, reconhecidos pela excelência técnica e 
                  pelo relacionamento próximo e humanizado com nossos clientes.
                </p>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-white p-6 sm:p-8 rounded-xl border-2 border-slate-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#5A9FA9" }}>
                  <Users className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3" style={{ color: '#27444C' }}>Valores</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ética profissional, excelência técnica, comprometimento com resultados, 
                  transparência nas relações e respeito aos interesses dos clientes.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>


          {/* Diferenciais */}
          <ScrollReveal delay={0.7}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg sm:text-xl font-medium mb-8 text-center text-white/80">
                Nossos Diferenciais
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: '#5A9FA9' }}></div>
                  <div>
                    <h4 className="font-medium text-white mb-1 text-sm">Atendimento Personalizado</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Cada caso é tratado de forma única, com estratégias específicas para suas necessidades.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: '#5A9FA9' }}></div>
                  <div>
                    <h4 className="font-medium text-white mb-1 text-sm">Equipe Especializada</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Advogados com formação sólida e experiência comprovada em suas áreas de atuação.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: '#5A9FA9' }}></div>
                  <div>
                    <h4 className="font-medium text-white mb-1 text-sm">Atuação Nacional</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Presença em todo território nacional, garantindo suporte onde você precisar.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: '#5A9FA9' }}></div>
                  <div>
                    <h4 className="font-medium text-white mb-1 text-sm">Tecnologia e Inovação</h4>
                    <p className="text-sm text-white/70 leading-relaxed">Utilizamos ferramentas modernas para otimizar processos e manter você informado.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* O que fazemos Section */}
      <section id="servicos" className="py-12 sm:py-16 md:py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal delay={0.1}>
            <div className="text-center mb-6 sm:mb-8">
              <span className="inline-block px-4 py-1.5 bg-teal-50 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider" style={{ color: '#5A9FA9' }}>
                SERVIÇOS
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-slate-900 text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
              Atuamos em <span className="font-semibold" style={{ color: '#5A9FA9' }}>direito médico</span>, <span className="font-semibold" style={{ color: '#5A9FA9' }}>estudantil</span> e <span className="font-semibold" style={{ color: '#5A9FA9' }}>consultoria especializada</span>.
            </h2>
          </ScrollReveal>

          <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
            <ScrollReveal delay={0.3}>
              <Link href="/servicos/direito-medico-saude">
                <motion.div 
                  whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-xl border border-slate-200 hover:border-[#27444C]500 transition-all cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0" 
                    style={{ backgroundColor: '#27444C' }}
                  >
                    <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3">
                      Direito médico
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Expertise em responsabilidade civil médica, direitos do paciente e defesa de profissionais de saúde com atuação em todo território nacional.
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link href="/servicos/direito-estudantil">
                <motion.div 
                  whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-xl border border-slate-200 hover:border-[#27444C]500 transition-all cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0" 
                    style={{ backgroundColor: '#27444C' }}
                  >
                    <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3">
                      Direito estudantil
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Assessoria completa para estudantes, famílias e instituições de ensino em questões acadêmicas, educacionais e administrativas.
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Link href="/areas-atuacao">
                <motion.div 
                  whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 bg-white rounded-xl border border-slate-200 hover:border-[#27444C]500 transition-all cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0" 
                    style={{ backgroundColor: '#27444C' }}
                  >
                    <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3">
                      Consultoria jurídica especializada
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Orientação jurídica estratégica com atendimento personalizado, foco em resultados e compromisso com a excelência.
                    </p>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-12 sm:py-16 md:py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal delay={0.2}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-8 sm:p-12 md:p-16 text-center" 
              style={{ backgroundColor: '#27444C' }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 sm:mb-6 px-4">
                Precisa de <span className="text-[#27444C]400">assessoria jurídica</span>?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Entre em contato conosco e agende uma consulta com nossos especialistas. Estamos prontos para defender seus direitos.
              </p>
              <a href="https://wa.me/5562996370290" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#4A8A94' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base flex items-center gap-2 mx-auto w-full sm:w-auto rounded-md font-medium shadow-lg cursor-pointer"
                  style={{ backgroundColor: '#5A9FA9' }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                  Entrar em contato agora
                </motion.button>
              </a>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-20 px-6 text-white" style={{ backgroundColor: '#27444C' }}>
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
                    <li><Link href="/servicos/direito-consumidor" className="hover:text-white transition-colors">Direito do Consumidor</Link></li>
                    <li><Link href="/servicos/direito-administrativo" className="hover:text-white transition-colors">Direito Administrativo</Link></li>
                    <li><Link href="/servicos/direito-empresarial" className="hover:text-white transition-colors">Direito Empresarial</Link></li>
                    <li><Link href="/servicos/direito-tributario" className="hover:text-white transition-colors">Direito Tributário</Link></li>
                    <li><Link href="/servicos/direito-medico-saude" className="hover:text-white transition-colors">Direito Médico e da Saúde</Link></li>
                    <li><Link href="/servicos/direito-estudantil" className="hover:text-white transition-colors">Direito Estudantil</Link></li>
                    <li><Link href="/servicos/direito-digital" className="hover:text-white transition-colors">Direito Digital</Link></li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Institucional</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                    <li><Link href="/equipe" className="hover:text-white transition-colors">Nossa Equipe</Link></li>
                    <li><Link href="/areas-atuacao" className="hover:text-white transition-colors">Áreas de Atuação</Link></li>
                    <li><Link href="/trabalhe-conosco" className="hover:text-white transition-colors">Trabalhe Conosco</Link></li>
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
                      <span>Edifício Euro Working Concept<br/>Rua João de Abreu, 116<br/>Setor Oeste, Goiânia - GO<br/>CEP 74120-011</span>
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
