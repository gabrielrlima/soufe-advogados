"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedNavbar } from "@/components/animations/navbar";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, CheckCircle2, Scale, Building2, FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function DireitoEmpresarialPage() {
  const services = [
    "Constituição e reestruturação de empresas",
    "Contratos empresariais e comerciais",
    "Fusões e aquisições (M&A)",
    "Recuperação judicial e extrajudicial",
    "Propriedade intelectual e marcas",
    "Governança corporativa",
    "Planejamento tributário empresarial",
    "Compliance e gestão de riscos",
    "Direito societário e acordos de sócios",
    "Resolução de conflitos empresariais",
  ];

  const expertise = [
    {
      icon: Building2,
      title: "Societário",
      description: "Constituição, organização e reestruturação de empresas, incluindo fusões e aquisições."
    },
    {
      icon: FileText,
      title: "Contratos",
      description: "Elaboração e análise de contratos comerciais, parcerias e joint ventures."
    },
    {
      icon: Scale,
      title: "Contencioso",
      description: "Representação em disputas judiciais e métodos alternativos de resolução de conflitos."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AnimatedNavbar />

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
              Direito <span className="font-semibold" style={{ color: '#5A9FA9' }}>Empresarial</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Assessoria jurídica completa para empresas, desde a constituição até fusões e aquisições,
              garantindo segurança jurídica e decisões estratégicas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#27444C' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Sobre a Área
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-4">
                    O Direito Empresarial regulamenta as atividades econômicas organizadas, abrangendo
                    as relações entre empresas, sócios, fornecedores e clientes. Nossa atuação garante
                    segurança jurídica, previne litígios e auxilia na tomada de decisões estratégicas.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    Oferecemos consultoria preventiva, contenciosa e de reorganização empresarial,
                    atuando em todas as fases do ciclo de vida da empresa, desde a constituição até
                    processos de fusão, aquisição ou recuperação judicial.
                  </p>
                </div>
              </ScrollReveal>

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

              <ScrollReveal delay={0.3}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    Serviços Oferecidos
                  </h2>
                  <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#27444C]500 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <ScrollReveal delay={0.4}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl p-8 text-white"
                    style={{ backgroundColor: '#5A9FA9' }}
                  >
                    <h3 className="text-xl font-bold mb-3">
                      Precisa de Assessoria?
                    </h3>
                    <p className="text-white/90 text-sm mb-6">
                      Entre em contato com nossos especialistas em Direito Empresarial.
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

                <ScrollReveal delay={0.5}>
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">
                      Outras Áreas
                    </h3>
                    <div className="space-y-3">
                      <Link href="/servicos/direito-administrativo" className="block text-sm text-slate-600 hover:text-[#27444C]600 transition-colors">
                        Direito Administrativo
                      </Link>
                      <Link href="/servicos/direito-consumidor" className="block text-sm text-slate-600 hover:text-[#27444C]600 transition-colors">
                        Direito do Consumidor
                      </Link>
                      <Link href="/servicos/direito-digital" className="block text-sm text-slate-600 hover:text-[#27444C]600 transition-colors">
                        Direito Digital
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
