# Soufe Advogados - Landing Page

Landing page moderna e profissional para o escritório de advocacia Soufe Advogados, desenvolvida com as melhores tecnologias web.

## 🎨 Design

O design foi implementado baseado no Figma, com foco em:

- Estética profissional e moderna
- Experiência do usuário otimizada
- Responsividade total (mobile, tablet, desktop)
- Acessibilidade e performance

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS v4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI de alta qualidade
- **DM Sans** - Fonte padrão do projeto (Google Fonts)

## 📋 Características

### Hero Section

- Imagem de fundo profissional
- Título destacando áreas de atuação
- Card informativo sobre a equipe
- Call-to-action claro

### Seções

1. **Serviços** - 4 áreas principais de atuação
   - Direito Cível
   - Direito Administrativo
   - Direito Empresarial
   - Direito Tributário

2. **Sobre** - Informações do escritório
   - História e valores
   - Diferenciais competitivos
   - Credenciais (OAB/SP)

3. **Contato** - Formulário e informações
   - Formulário de contato
   - Telefone, e-mail e endereço
   - Mapa de localização (futuro)

4. **Footer** - Links e informações
   - Links organizados por categoria
   - Redes sociais
   - Políticas e termos

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

### Desenvolvimento

O servidor de desenvolvimento estará disponível em:

- Local: http://localhost:3000
- Network: http://192.168.1.2:3000

## 📁 Estrutura do Projeto

```
soufe-advogados/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal com DM Sans
│   │   ├── page.tsx        # Página inicial
│   │   └── globals.css     # Estilos globais
│   ├── components/
│   │   └── ui/             # Componentes shadcn/ui
│   └── lib/
│       └── utils.ts        # Utilitários
├── public/                 # Assets estáticos
├── components.json         # Configuração shadcn
└── package.json
```

## 🎯 Próximos Passos

- [ ] Adicionar animações de scroll
- [ ] Integrar formulário de contato com backend
- [ ] Adicionar blog/artigos
- [ ] Implementar área de depoimentos
- [ ] Adicionar galeria da equipe
- [ ] Integração com Google Maps
- [ ] Otimização SEO avançada
- [ ] Implementar dark mode toggle

## 📝 Customização

### Cores

As cores principais podem ser ajustadas em `src/app/globals.css`:

- Primary: Teal (verde-azulado profissional)
- Background: Branco/Slate
- Accent: Teal variants

### Fonte

A fonte padrão é **DM Sans**, configurada em:

- `src/app/layout.tsx` - Importação e configuração
- `src/app/globals.css` - Variável CSS

### Componentes

Adicionar novos componentes shadcn:

```bash
npx shadcn@latest add [component-name]
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Deploy automático ao conectar o repositório
vercel
```

### Outras plataformas

- Netlify
- AWS Amplify
- Google Cloud Run
- Docker

## 📄 Licença

© 2024 Soufe Advogados. Todos os direitos reservados.

## 👥 Contato

- **Website**: Em desenvolvimento
- **Email**: contato@soufeadvogados.com.br
- **Telefone**: (11) 3456-7890
- **Endereço**: Av. Paulista, 1000 - 10º andar, São Paulo - SP

---

Desenvolvido com ❤️ usando Next.js e shadcn/ui
