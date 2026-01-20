"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedNavbar } from "@/components/animations/navbar";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, ArrowRight, Smartphone, Heart, Building2, Briefcase, Calculator, GraduationCap, ShoppingCart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function AreasAtuacaoPage() {
  const areas = [
    {
      icon: Building2,
      title: "Direito Administrativo",
      description: "Licitações, contratos administrativos, processos disciplinares e defesa perante órgãos públicos.",
      href: "/servicos/direito-administrativo",
    },
    {
      icon: ShoppingCart,
      title: "Direito do Consumidor",
      description: "Defesa dos direitos do consumidor, produtos defeituosos, cobranças indevidas e CDC.",
      href: "/servicos/direito-consumidor",
    },
    {
      icon: Smartphone,
      title: "Direito Digital",
      description: "LGPD, proteção de dados, crimes cibernéticos e contratos de tecnologia.",
      href: "/servicos/direito-digital",
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description: "Constituição de empresas, contratos comerciais, fusões e aquisições, e recuperação judicial.",
      href: "/servicos/direito-empresarial",
    },
    {
      icon: GraduationCap,
      title: "Direito Estudantil",
      description: "Defesa de estudantes, processos disciplinares, questões acadêmicas e FIES.",
      href: "/servicos/direito-estudantil",
    },
    {
      icon: Heart,
      title: "Direito Médico e da Saúde",
      description: "Defesa de profissionais da saúde, erro médico e ações contra planos de saúde.",
      href: "/servicos/direito-medico-saude",
    },
    {
      icon: Calculator,
      title: "Direito Tributário",
      description: "Planejamento fiscal, recuperação de créditos tributários e compliance fiscal.",
      href: "/servicos/direito-tributario",
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
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-[#27444C]600 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
              Nossas Especialidades
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 max-w-4xl">
              Áreas de <span className="text-[#27444C]500">Atuação</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Conheça todas as áreas em que atuamos com excelência e compromisso, oferecendo soluções
              jurídicas personalizadas para cada necessidade.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {areas.map((area, index) => (
              <ScrollReveal key={area.title} delay={0.1 * (index + 1)}>
                <Link href={area.href}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#27444C]500 transition-all h-full flex flex-col relative overflow-hidden cursor-pointer"
                  >
                    {/* Decorative gradient background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-teal-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full" />

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center mb-6 relative z-10">
                      <area.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {area.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {area.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-[#27444C]600 font-medium text-sm relative z-10">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Não encontrou o que procura?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar com sua questão jurídica específica.
              </p>
              <a href="https://wa.me/5562996370290" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#27444C] hover:bg-[#27444C] text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Falar com um especialista
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
                Souza Fernandes advogados é uma sociedade de advogados inscrita na OAB/GO sob o n° 005825 e CNPJ 51.294.033/0001-22.
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
                      <Phone className="w-4 h-4 text-[#27444C]400 shrink-0 mt-0.5" />
                      <span>(62) 99172-9323</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-[#27444C]400 shrink-0 mt-0.5" />
                      <span>contato@soufeadvogados.com.br</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#27444C]400 shrink-0 mt-0.5" />
                      <span>R. João de Abreu, 116<br />Sala B1005<br />Setor Oeste, Goiânia - GO<br />CEP 74.120-110</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <Separator className="bg-slate-800 mb-6 sm:mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-400">
            <p className="text-center md:text-left">CNPJ: 51.294.033/0001-22 | © 2026 Soufe Advogados. Todos os direitos reservados.</p>
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
