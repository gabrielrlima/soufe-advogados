"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedNavbar } from "@/components/animations/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Dados da equipe
const teamMembers = [
  {
    name: "Ângela Santana Rodrigues de Oliveira",
    role: "Gestora Jurídica",
    specialty: "Especialista em Direito Estudantil e Direito Digital",
    image: "/adv-profile.jpeg",
    linkedin: "#",
    oab: "OAB/GO 73540"
  },
  {
    name: "Viviane Souza Fernandes",
    role: "Coordenadora Jurídica",
    specialty: "Especialista em Direito Tributário e Direito Médico",
    image: "",
    linkedin: "#",
    oab: "OAB/GO 67549 | OAB/SP 52051"
  },
  {
    name: "Isabela Fernandes Santos",
    role: "Advogada",
    specialty: "Direito Civil e do Consumidor",
    image: "",
    linkedin: "#",
    oab: "OAB/GO 71683"
  },
  {
    name: "Kiani Vieira Nunes",
    role: "Advogada",
    specialty: "Assessoria Jurídica",
    image: "",
    linkedin: "#",
    oab: "OAB/GO 66320"
  },
  {
    name: "Victor Hugo Felipe Teixeira",
    role: "Assistente Jurídico",
    specialty: "",
    image: "",
    linkedin: "#",
    oab: ""
  },
];

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <AnimatedNavbar />

      {/* Hero Section */}
      <section className="w-full pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 bg-linear-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal delay={0.1}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-center mb-4 sm:mb-6 max-w-4xl mx-auto px-2">
              Profissionais <span className="font-semibold" style={{ color: '#5A9FA9' }}>especializados</span> e <span className="font-semibold" style={{ color: '#5A9FA9' }}>comprometidos</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
              O escritório Soufe Advogados conta com uma equipe multidisciplinar pronta para realizar
              um atendimento dinâmico e focado nas necessidades de cada cliente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#27444C' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={0.1 * (index + 1)}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#27444C]500 transition-all h-full flex flex-col relative overflow-hidden"
                >
                  {/* Profile Image */}
                  {member.image && (
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: 'center 20%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  {/* Content Container */}
                  <div className={`p-6 sm:p-8 flex-1 flex flex-col relative ${!member.image ? 'min-h-[280px] sm:min-h-[320px]' : ''}`}>
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />

                    {/* Header */}
                    <div className="relative z-10 mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                        {member.name}
                      </h3>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-8 sm:w-12 bg-linear-to-r from-teal-500 to-teal-300 rounded-full" />
                        <p className="text-sm font-semibold text-[#27444C]600 uppercase tracking-wide">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 space-y-4">
                      {member.specialty && (
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">
                            Especialidade
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {member.specialty}
                          </p>
                        </div>
                      )}

                      {member.oab && (
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#27444C]" />
                          <span className="font-mono">{member.oab}</span>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {member.linkedin && member.linkedin !== "#" && (
                      <div className="relative z-10 mt-6 pt-4 border-t border-slate-100">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#27444C]600 hover:text-[#27444C]700 transition-colors group/link"
                        >
                          <Linkedin className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          <span>Conectar no LinkedIn</span>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-6 bg-slate-50">
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
                Entre em contato conosco e agende uma consulta com nossos especialistas.
                Estamos prontos para defender seus direitos.
              </p>
              <a href="https://wa.me/5562996370290" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#27444C] hover:bg-[#27444C] text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base flex items-center gap-2 mx-auto w-full sm:w-auto">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    Entrar em contato agora
                  </Button>
                </motion.div>
              </a>
            </motion.div>
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
