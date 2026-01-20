"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AnimatedNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Áreas de Atuação", href: "/areas-atuacao" },
    { name: "Direito Administrativo", href: "/servicos/direito-administrativo" },
    { name: "Direito do Consumidor", href: "/servicos/direito-consumidor" },
    { name: "Direito Digital", href: "/servicos/direito-digital" },
    { name: "Direito Empresarial", href: "/servicos/direito-empresarial" },
    { name: "Direito Estudantil", href: "/servicos/direito-estudantil" },
    { name: "Direito Médico e da Saúde", href: "/servicos/direito-medico-saude" },
    { name: "Direito Tributário", href: "/servicos/direito-tributario" },
  ];

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
        setMobileMenuOpen(false); // Close menu when hiding navbar
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ backgroundColor: '#27444C' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logosoufe.png"
                alt="Soufe Advogados"
                width={100}
                height={33}
                className="h-8 sm:h-10 w-auto"
              />
              <div className="border-l border-white/30 pl-2 sm:pl-3">
                <p className="text-white text-[10px] sm:text-sm font-medium leading-tight">
                  Souza Fernandes<br />
                  <span className="text-[8px] sm:text-xs font-normal text-white/80">sociedade de advogados</span>
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="/" className="text-sm text-white hover:text-brand-secondary transition-colors font-medium relative group">
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/equipe" className="text-sm text-white hover:text-brand-secondary transition-colors font-medium relative group">
                Equipe
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-sm text-white hover:text-brand-secondary transition-colors font-medium relative group flex items-center gap-1">
                  Serviços
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-xl shadow-2xl border border-slate-200 py-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-teal-50 hover:text-[#27444C]600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>

              <Link href="/sobre" className="text-sm text-white hover:text-brand-secondary transition-colors font-medium relative group">
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/trabalhe-conosco" className="text-sm text-white hover:text-brand-secondary transition-colors font-medium relative group">
                Trabalhe conosco
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
              </Link>
              <a href="https://wa.me/5562996370290" target="_blank" rel="noopener noreferrer">
                <Button className="bg-brand-secondary hover:bg-brand-secondary flex items-center gap-2 hover:scale-105 transition-transform text-sm">
                  <FaWhatsapp className="w-4 h-4" />
                  Entrar em contato
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 relative z-50 text-white hover:text-brand-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                <Image
                  src="/logo.png"
                  alt="Soufe Advogados"
                  width={100}
                  height={33}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#27444C]600 transition-colors"
                  >
                    Início
                  </Link>

                  <Link
                    href="/equipe"
                    onClick={handleLinkClick}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#27444C]600 transition-colors"
                  >
                    Equipe
                  </Link>

                  {/* Services Submenu */}
                  <div className="space-y-1">
                    <Link
                      href="/areas-atuacao"
                      onClick={handleLinkClick}
                      className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#27444C]600 transition-colors"
                    >
                      Serviços
                    </Link>
                    <div className="ml-3 space-y-1 border-l-2 border-slate-200 pl-3">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={handleLinkClick}
                          className="block rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#27444C]600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/sobre"
                    onClick={handleLinkClick}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#27444C]600 transition-colors"
                  >
                    Sobre
                  </Link>

                  <Link
                    href="/trabalhe-conosco"
                    onClick={handleLinkClick}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-[#27444C]600 transition-colors"
                  >
                    Trabalhe conosco
                  </Link>
                </div>
              </nav>

              {/* Footer CTA */}
              <div className="border-t border-slate-200 p-6">
                <a
                  href="https://wa.me/5562996370290"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                >
                  <Button className="w-full bg-brand-secondary hover:bg-brand-secondary flex items-center justify-center gap-2 h-12">
                    <FaWhatsapp className="h-5 w-5" />
                    Entrar em contato
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
