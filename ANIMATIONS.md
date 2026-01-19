# 🎨 Animações e Melhorias de Performance

## ✨ Animações Implementadas

### 1. **Scroll Reveal Animations**

- Todos os elementos aparecem suavemente conforme o usuário rola a página
- Direções personalizadas: up, down, left, right
- Delays escalonados para criar efeito cascata
- Usa Intersection Observer para performance otimizada

### 2. **Counter Animations**

- Números animam de 0 até o valor final
- Física de mola (spring physics) para movimento natural
- Suporte para sufixos (ex: "10k")
- Ativa apenas quando visível na tela

### 3. **Navbar Dinâmico**

- Esconde ao rolar para baixo
- Aparece ao rolar para cima
- Background fica mais opaco conforme scroll
- Links com underline animado no hover

### 4. **Micro-interações**

#### Botões:

- Scale effect no hover (1.05x)
- Scale down no click (0.95x)
- Transições suaves

#### Cards de Serviço:

- Elevação no hover (lift effect)
- Shadow dinâmico
- Border color transition
- Ícones rotacionam no hover

#### Cards de Valores:

- Elevação suave no hover
- Ícones rotacionam 360° no hover

#### WhatsApp Button:

- Ícone pulsa continuamente
- Chama atenção para CTA principal

### 5. **Hero Section**

- Fade in + scale na imagem de fundo
- Título com slide up
- Card lateral com slide from right
- Delays coordenados para sequência visual

### 6. **Footer**

- Scroll reveal em cada coluna
- Delays escalonados

## ⚡ Otimizações de Performance

### 1. **Lazy Loading**

- Imagens otimizadas com Next.js Image
- Priority loading apenas no hero
- Lazy loading automático para imagens abaixo do fold

### 2. **Intersection Observer**

- Animações só executam quando elemento está visível
- Opção `once: true` para executar apenas uma vez
- Margin de -100px para antecipar animação

### 3. **Smooth Scrolling**

- CSS `scroll-behavior: smooth`
- Navegação suave entre seções

### 4. **Framer Motion**

- Biblioteca otimizada para animações React
- GPU-accelerated transforms
- Automatic cleanup

## 🎯 Componentes Criados

### `/components/animations/scroll-reveal.tsx`

Componente reutilizável para animações de entrada ao scroll.

**Props:**

- `children`: ReactNode
- `delay`: number (default: 0)
- `direction`: "up" | "down" | "left" | "right" (default: "up")
- `className`: string

**Uso:**

```tsx
<ScrollReveal delay={0.2} direction="up">
  <h1>Seu conteúdo</h1>
</ScrollReveal>
```

### `/components/animations/counter.tsx`

Contador animado com spring physics.

**Props:**

- `value`: number
- `suffix`: string (opcional, ex: "k")
- `className`: string
- `style`: React.CSSProperties

**Uso:**

```tsx
<Counter value={10000} suffix="k" className="text-4xl" />
```

### `/components/animations/navbar.tsx`

Navbar dinâmico com hide/show no scroll.

**Features:**

- Auto-hide ao rolar para baixo
- Auto-show ao rolar para cima
- Background opacity baseado em scroll
- Links com underline animado

## 🚀 Performance Metrics

### Antes:

- Página estática sem animações
- Carregamento básico de imagens

### Depois:

- ✅ Animações fluidas a 60fps
- ✅ Lazy loading otimizado
- ✅ Intersection Observer para eficiência
- ✅ GPU-accelerated transforms
- ✅ Smooth scrolling nativo
- ✅ Code splitting automático (Framer Motion)

## 📦 Dependências Adicionadas

```json
{
  "framer-motion": "^11.x.x"
}
```

## 🎨 Efeitos Visuais

### Hover Effects:

- **Botões**: Scale 1.05x
- **Cards**: Lift -4px + shadow
- **Ícones**: Rotate 5° ou 360°
- **Links**: Underline expansion

### Scroll Effects:

- **Fade in**: Opacity 0 → 1
- **Slide up**: Y 40px → 0
- **Scale**: 0.95 → 1
- **Stagger**: Delays incrementais

### Continuous Animations:

- **WhatsApp Icon**: Pulse 1 → 1.2 → 1 (2s loop)

## 🔧 Customização

Para ajustar velocidade das animações, edite:

- `duration` em scroll-reveal.tsx (padrão: 0.6s)
- `duration` em counter.tsx (padrão: 2000ms)
- `ease` curves para diferentes feels

## 💡 Boas Práticas Implementadas

1. ✅ Animações executam apenas uma vez (`once: true`)
2. ✅ Margin negativa para antecipar entrada
3. ✅ Delays escalonados para hierarquia visual
4. ✅ GPU acceleration (transform, opacity)
5. ✅ Cleanup automático de listeners
6. ✅ Passive event listeners
7. ✅ Componentes client-side apenas onde necessário
