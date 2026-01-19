"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedNavbar } from "@/components/animations/navbar";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Upload, Send, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function TrabalheConoscoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
    mensagem: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      if (file) {
        formDataToSend.append("curriculo", file);
      }

      const response = await fetch("/api/trabalhe-conosco", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Erro ao enviar");

      setSuccess(true);
      setFormData({ nome: "", email: "", telefone: "", area: "", mensagem: "" });
      setFile(null);
    } catch (err) {
      setError("Erro ao enviar currículo. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedNavbar />

      {/* Hero Section */}
      <section className="w-full pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-linear-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal delay={0.1}>
            <div className="mb-4">
              <Link href="/" className="text-sm text-slate-600 hover:text-slate-700 transition-colors">
                ← Voltar para home
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <span className="inline-block px-4 py-1.5 bg-teal-50 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: '#5A9FA9' }}>
              Carreiras
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 max-w-4xl">
              Trabalhe <span className="font-semibold" style={{ color: '#5A9FA9' }}>Conosco</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Faça parte de uma equipe comprometida com excelência jurídica e atendimento humanizado.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#27444C' }}>
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: '#5A9FA9' }} />
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Currículo Enviado!</h2>
                  <p className="text-slate-600">Entraremos em contato em breve.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Área de Interesse *
                    </label>
                    <select
                      required
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Selecione uma área</option>
                      <option value="Direito Administrativo">Direito Administrativo</option>
                      <option value="Direito do Consumidor">Direito do Consumidor</option>
                      <option value="Direito Digital">Direito Digital</option>
                      <option value="Direito Empresarial">Direito Empresarial</option>
                      <option value="Direito Estudantil">Direito Estudantil</option>
                      <option value="Direito Médico e da Saúde">Direito Médico e da Saúde</option>
                      <option value="Direito Tributário">Direito Tributário</option>
                      <option value="Administrativo">Administrativo</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Currículo (PDF) *
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors">
                      <input
                        type="file"
                        accept=".pdf"
                        required
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                        <p className="text-sm text-slate-600">
                          {file ? file.name : "Clique para selecionar ou arraste seu currículo"}
                        </p>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Mensagem (Opcional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Conte-nos um pouco sobre você..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white font-semibold px-8 py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity disabled:opacity-50"
                    style={{ backgroundColor: '#5A9FA9' }}
                  >
                    {loading ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Currículo
                      </>
                    )}
                  </button>
                </form>
              )}
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
                  <h4 className="font-semibold mb-4 text-white">Institucional</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li><Link href="/#sobre" className="hover:text-teal-400 transition-colors">Sobre Nós</Link></li>
                    <li><Link href="/equipe" className="hover:text-teal-400 transition-colors">Nossa Equipe</Link></li>
                    <li><Link href="/trabalhe-conosco" className="hover:text-teal-400 transition-colors">Trabalhe Conosco</Link></li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Serviços</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li><Link href="/servicos/direito-digital" className="hover:text-teal-400 transition-colors">Direito Digital</Link></li>
                    <li><Link href="/servicos/direito-empresarial" className="hover:text-teal-400 transition-colors">Direito Empresarial</Link></li>
                    <li><Link href="/areas-atuacao" className="hover:text-teal-400 transition-colors font-medium">Ver todas →</Link></li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Contato</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>(62) 99637-0290</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>contato@soufeadvogados.com.br</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
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
              className="hover:text-teal-400 transition-colors"
            >
              Design e desenvolvimento feitos por Garo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
