# 🚀 Portfólio Web & Desenvolvimento Full Stack

Um site de portfólio moderno, veloz e responsivo desenvolvido com HTML5, Tailwind CSS, JavaScript ES6+ e integrado à **API REST oficial do GitHub**.

Desenvolvido para **Guilherme Leão** (`@gleao92`), com terminal interativo, análise aprofundada de arquitetura com modais dedicados, busca em tempo real, filtros por categorias e linguagens, tema claro/escuro e design refinado em estilo *glassmorphism*.

---

## ✨ Funcionalidades de Experiência do Usuário (UI/UX)

- 💻 **Terminal Interativo CLI**: Console interativo onde recrutadores e desenvolvedores podem digitar ou clicar em comandos rápidos (`sobre`, `projetos`, `skills`, `contato`, `github`, `clear`).
- 🏗️ **Modais de Arquitetura de Software**: Cada projeto conta com uma janela modal detalhando:
  - **Desafio de Negócio**: o problema real que o software resolve.
  - **Solução & Decisões de Arquitetura**: padrões, segurança (RLS/LGPD), offline-first e concorrência.
  - **Destaques de Engenharia**: diferenciais técnicos específicos.
  - **Botão de clonagem**: copia `git clone <url>` com 1 clique.
- ⚡ **Integração em Tempo Real com a API do GitHub**: Puxa foto, bio e repositórios atualizados diretamente de `@gleao92` com cache local em `localStorage`.
- 📊 **Filtros por Categoria de Mercado**: Abas com contadores para navegar entre:
  - *GovTech & Cidadania* (Aplicativo de Gestão Pública para Municípios)
  - *LegalTech & Jurimetria* (Tempestivo)
  - *SaaS & ERPs* (OpticFlow)
  - *APIs & Web Apps* (MoodSync & Gestão de Frotas)
- 📍 **Barra de Progresso & Voltar ao Topo**: Indicador visual dinâmico de rolagem no topo e botão flutuante para retorno rápido.
- 🌗 **Dark Mode & Light Mode**: Alternância suave e persistente no navegador.

---

## 📂 Estrutura de Arquivos

```text
github-portfolio/
├── index.html       # Estrutura completa, hero, terminal, modais e seções
├── style.css        # Efeitos glassmorphism, temas, grid pattern e animações
├── app.js           # CLI do terminal, modais, filtros, scroll progress e API GitHub
├── config.js        # Configurações de projetos, arquiteturas, bio e redes
└── README.md        # Guia completo de uso e publicação online
```

---

## 🌐 Onde e Como Publicar para Ficar Online Gratuitamente

Você tem 4 excelentes opções gratuitas para colocar seu portfólio no ar. Aqui está o passo a passo para cada uma:

### Opção 1: GitHub Pages (⭐ Mais Recomendada)
*Como seu código já está no GitHub, esta é a opção mais natural, rápida e 100% gratuita para sempre.*

1. Crie um novo repositório público no seu GitHub (`https://github.com/new`):
   - Nome: `portfolio` **OU** `gleao92.github.io` (se usar `gleao92.github.io`, o link será a raiz `https://gleao92.github.io`).
2. Abra o terminal na pasta do projeto e envie os arquivos:
   ```bash
   cd "C:\Users\guilherme.leao\.gemini\antigravity\scratch\github-portfolio"
   git init
   git add .
   git commit -m "feat: portfolio modernizado com terminal e modais de arquitetura"
   git branch -M main
   git remote add origin https://github.com/gleao92/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, acesse a aba **Settings** do repositório:
   - Clique em **Pages** (no menu lateral esquerdo).
   - Em **Build and deployment > Source**, selecione **Deploy from a branch**.
   - Em **Branch**, selecione `main` e `/ (root)`.
   - Clique em **Save**.
4. Pronto! Em cerca de 1 minuto seu site estará online com HTTPS gratuito.

---

### Opção 2: Vercel (⚡ Mais Rápida & Global CDN)
*A Vercel é líder em performance e atualiza o site automaticamente a cada novo commit.*

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. Clique em **Add New... > Project**.
3. Selecione o repositório do seu portfólio e clique em **Import**.
4. Deixe as opções padrão e clique em **Deploy**.
5. Em 20 segundos você terá um link como `guilhermeleao-portfolio.vercel.app`.

---

### Opção 3: Netlify (Drag and Drop sem Git)
*Ideal se você quiser colocar online em 10 segundos sem rodar comandos.*

1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
2. Faça login com GitHub.
3. Arraste a pasta `github-portfolio` diretamente para a área indicada na tela.
4. Seu site ficará online instantaneamente com um domínio `.netlify.app`.

---

### Opção 4: Cloudflare Pages
*Excelente para alta velocidade, proteção contra DDoS e tráfego ilimitado.*

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com).
2. Conecte ao GitHub e selecione o repositório.
3. Clique em **Begin setup** e depois em **Save and Deploy**.

---

## 🛠️ Como Personalizar

- Para atualizar textos, projetos ou links de contato: edite o arquivo [`config.js`](file:///C:/Users/guilherme.leao/.gemini/antigravity/scratch/github-portfolio/config.js).
- Para testar localmente: basta dar um duplo clique em [`index.html`](file:///C:/Users/guilherme.leao/.gemini/antigravity/scratch/github-portfolio/index.html).
