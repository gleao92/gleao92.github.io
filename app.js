/**
 * PORTFÓLIO - GUILHERME LEÃO (@gleao92)
 * Arquitetura de Interatividade, Modal de Casos de Estudo e Integração com GitHub
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.PORTFOLIO_CONFIG || {};

  // Elementos do DOM
  const elements = {
    userAvatar: document.getElementById('user-avatar'),
    projectsList: document.getElementById('projects-list'),
    projectModal: document.getElementById('project-modal'),
    modalBody: document.getElementById('modal-body'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    terminalForm: document.getElementById('terminal-form'),
    terminalInput: document.getElementById('terminal-input'),
    terminalOutput: document.getElementById('terminal-output'),
    terminalPills: document.getElementById('terminal-pills'),
    scrollProgress: document.getElementById('scroll-progress'),
    backToTop: document.getElementById('back-to-top'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIconLight: document.getElementById('theme-icon-light'),
    themeIconDark: document.getElementById('theme-icon-dark'),
    copyEmailBtn: document.getElementById('copy-email-btn'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message'),
    currentYear: document.getElementById('current-year')
  };

  // Inicialização
  initTheme();
  setupTerminalCLI();
  renderProjects();
  setupModalEvents();
  setupScrollEvents();
  setupEventListeners();

  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }

  // ==========================================
  // 1. GERENCIAMENTO DE TEMA (DARK / LIGHT)
  // ==========================================
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(savedTheme);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'light') {
      elements.themeIconLight?.classList.remove('hidden');
      elements.themeIconDark?.classList.add('hidden');
    } else {
      elements.themeIconLight?.classList.add('hidden');
      elements.themeIconDark?.classList.remove('hidden');
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // ==========================================
  // CONSOLE INTERATIVO DO DESENVOLVEDOR (CLI)
  // ==========================================
  function setupTerminalCLI() {
    if (!elements.terminalForm || !elements.terminalInput || !elements.terminalOutput) return;

    const commands = {
      help: () => `
        <div class="text-zinc-200">Comandos disponíveis:</div>
        <div class="grid grid-cols-2 gap-1 text-zinc-300 mt-1">
          <div><span class="text-indigo-400 font-bold">sobre</span> : Resumo e foco</div>
          <div><span class="text-emerald-400 font-bold">projetos</span> : Lista os sistemas reais</div>
          <div><span class="text-amber-400 font-bold">skills</span> : Tecnologias dominadas</div>
          <div><span class="text-purple-400 font-bold">contato</span> : E-mail e redes</div>
          <div><span class="text-zinc-400 font-bold">limpar</span> / <span class="text-zinc-400 font-bold">clear</span> : Limpa o terminal</div>
        </div>
      `,
      sobre: () => `
        <div class="text-zinc-200">
          <span class="text-indigo-400 font-bold">${config.name}</span> — ${config.role}
          <p class="text-zinc-300 text-xs mt-1 leading-relaxed">${config.bio}</p>
        </div>
      `,
      projetos: () => `
        <div class="text-zinc-200 font-semibold mb-1">Projetos Desenvolvidos:</div>
        <div class="space-y-1 text-xs">
          ${(config.projects || []).map(p => `
            <div><span class="text-emerald-400 font-bold">${p.title}</span> <span class="text-zinc-500 font-mono">[${p.category}]</span></div>
          `).join('')}
        </div>
        <div class="text-zinc-400 text-[11px] mt-2">Dica: Role a página para a seção de Projetos ou clique em "Detalhes" para ver a arquitetura completa.</div>
      `,
      skills: () => `
        <div class="text-zinc-200 font-semibold mb-1">Stack Tecnológica:</div>
        <div class="space-y-1.5 text-xs text-zinc-300">
          <div><strong class="text-indigo-400">Backend:</strong> ${(config.skills?.backend || []).join(', ')}</div>
          <div><strong class="text-indigo-400">Frontend:</strong> ${(config.skills?.frontend || []).join(', ')}</div>
          <div><strong class="text-indigo-400">DevOps & Infra:</strong> ${(config.skills?.devops || []).join(', ')}</div>
        </div>
      `,
      contato: () => `
        <div class="text-zinc-200 space-y-1">
          <div>💬 WhatsApp: <a href="${config.socialLinks?.whatsapp || 'https://wa.me/5562982488018'}" target="_blank" class="text-emerald-400 underline font-semibold">(62) 98248-8018</a></div>
          <div>📧 E-mail: <a href="mailto:${config.email}" class="text-indigo-400 underline font-semibold">${config.email}</a></div>
          <div>🐙 GitHub: <a href="https://github.com/${config.githubUsername}" target="_blank" class="text-indigo-400 underline font-semibold">github.com/${config.githubUsername}</a></div>
          <div>💼 LinkedIn: <a href="${config.socialLinks?.linkedin || '#'}" target="_blank" class="text-indigo-400 underline font-semibold">Ver Perfil</a></div>
        </div>
      `,
      clear: () => {
        elements.terminalOutput.innerHTML = '';
        return '';
      },
      limpar: () => {
        elements.terminalOutput.innerHTML = '';
        return '';
      }
    };

    function executeCommand(rawCmd) {
      const cmd = rawCmd.trim().toLowerCase();
      if (!cmd) return;

      const outputRow = document.createElement('div');
      outputRow.className = 'space-y-1 pt-1 border-t border-zinc-800/60';

      const promptLine = document.createElement('div');
      promptLine.className = 'text-zinc-400';
      promptLine.innerHTML = `<span class="text-indigo-400 font-semibold">guilherme@dev:~$</span> ${escapeHtml(cmd)}`;
      outputRow.appendChild(promptLine);

      const resultLine = document.createElement('div');
      resultLine.className = 'pl-3 border-l-2 border-zinc-700/60';

      if (cmd === 'clear' || cmd === 'limpar') {
        commands.clear();
        return;
      }

      if (commands[cmd]) {
        resultLine.innerHTML = commands[cmd]();
      } else {
        resultLine.innerHTML = `<span class="text-rose-400">Comando não reconhecido: '${escapeHtml(cmd)}'. Digite <span class="text-indigo-400 font-bold">help</span> para opções.</span>`;
      }

      outputRow.appendChild(resultLine);
      elements.terminalOutput.appendChild(outputRow);
      elements.terminalInput.value = '';
      elements.terminalOutput.scrollTop = elements.terminalOutput.scrollHeight;
    }

    elements.terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      executeCommand(elements.terminalInput.value);
    });

    if (elements.terminalPills) {
      elements.terminalPills.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          const cmd = btn.getAttribute('data-cmd');
          executeCommand(cmd);
        });
      });
    }
  }

  // ==========================================
  // 2. RENDERIZAÇÃO DOS PROJETOS SELECIONADOS
  // ==========================================
  function renderProjects() {
    if (!elements.projectsList || !config.projects?.length) return;

    elements.projectsList.innerHTML = config.projects.map(project => `
      <article class="project-card p-5 sm:p-6 flex flex-col justify-between">
        <div>
          <!-- Header do Card: Categoria & Ano -->
          <div class="flex items-center justify-between text-xs mb-2">
            <span class="font-mono font-medium text-indigo-600 dark:text-indigo-400">
              ${escapeHtml(project.category)}
            </span>
            <span class="font-mono text-zinc-600 dark:text-zinc-400">
              ${escapeHtml(project.year || '2026')}
            </span>
          </div>

          <!-- Título -->
          <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            ${escapeHtml(project.title)}
          </h3>

          <!-- Resumo -->
          <p class="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-4 font-normal">
            ${escapeHtml(project.summary)}
          </p>
        </div>

        <!-- Footer do Card: Tags & Ações -->
        <div class="pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="flex flex-wrap gap-1.5">
            ${(project.stack || []).map(tech => `
              <span class="tech-tag">${escapeHtml(tech)}</span>
            `).join('')}
          </div>

          <div class="flex items-center gap-2 flex-shrink-0">
            <button class="open-modal-btn px-3 py-1.5 rounded-lg text-xs font-semibold btn-outline inline-flex items-center gap-1.5" data-project-id="${project.id}">
              <span>Detalhes</span>
              <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400"></i>
            </button>

            ${!project.isPrivate ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
                 class="px-3 py-1.5 rounded-lg text-xs font-semibold btn-outline inline-flex items-center gap-1.5" title="Ver código no GitHub">
                <i data-lucide="github" class="w-3.5 h-3.5"></i>
                <span>Código</span>
              </a>
            ` : `
              <span class="px-2.5 py-1.5 rounded-lg text-[11px] font-mono text-zinc-600 dark:text-zinc-400 inline-flex items-center gap-1" title="Código proprietário">
                <i data-lucide="lock" class="w-3 h-3"></i>
                Privado
              </span>
            `}
          </div>
        </div>
      </article>
    `).join('');

    // Eventos dos botões do modal
    elements.projectsList.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-project-id');
        openProjectModal(pId);
      });
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // ==========================================
  // 3. MODAL DE CASO DE ESTUDO DE ENGENHARIA
  // ==========================================
  function setupModalEvents() {
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeModal);
    }

    if (elements.projectModal) {
      elements.projectModal.addEventListener('click', (e) => {
        if (e.target === elements.projectModal) {
          closeModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  function openProjectModal(projectId) {
    const project = (config.projects || []).find(p => p.id === projectId);
    if (!project || !elements.modalBody || !elements.projectModal) return;

    elements.modalBody.innerHTML = `
      <div class="space-y-6">
        <div>
          <div class="font-mono text-xs text-indigo-600 dark:text-indigo-400 mb-1">
            ${escapeHtml(project.category)} · ${escapeHtml(project.year || '2026')}
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            ${escapeHtml(project.title)}
          </h2>
        </div>

        <!-- Problema Real -->
        <div class="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-1.5 flex items-center gap-1.5">
            <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-500"></i>
            O Desafio de Negócio
          </h3>
          <p class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
            ${escapeHtml(project.challenge)}
          </p>
        </div>

        <!-- Solução Técnica -->
        <div class="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-1.5 flex items-center gap-1.5">
            <i data-lucide="cpu" class="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400"></i>
            A Solução de Engenharia
          </h3>
          <p class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
            ${escapeHtml(project.solution)}
          </p>
        </div>

        <!-- Stack Técnica -->
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
            Tecnologias Envolvidas
          </h3>
          <div class="flex flex-wrap gap-1.5">
            ${(project.stack || []).map(t => `
              <span class="tech-tag">${escapeHtml(t)}</span>
            `).join('')}
          </div>
        </div>

        <!-- Ações do Modal -->
        <div class="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div>
            ${!project.isPrivate ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
                 class="px-3.5 py-1.5 rounded-lg text-xs font-semibold btn-dark inline-flex items-center gap-1.5">
                <i data-lucide="github" class="w-3.5 h-3.5"></i>
                <span>Ver no GitHub</span>
              </a>
            ` : `
              <span class="text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                Repositório privado
              </span>
            `}
          </div>

          <button class="close-modal-action px-3 py-1.5 rounded-lg text-xs font-medium btn-outline">
            Fechar
          </button>
        </div>
      </div>
    `;

    elements.modalBody.querySelectorAll('.close-modal-action').forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    elements.projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeModal() {
    if (!elements.projectModal) return;
    elements.projectModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ==========================================
  // EVENTOS GERAIS (SCROLL, COPIAR, TEMA)
  // ==========================================
  function setupScrollEvents() {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      if (elements.scrollProgress) {
        elements.scrollProgress.style.width = `${scrolled}%`;
      }

      if (elements.backToTop) {
        if (winScroll > 300) {
          elements.backToTop.classList.add('visible');
        } else {
          elements.backToTop.classList.remove('visible');
        }
      }
    });

    if (elements.backToTop) {
      elements.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function setupEventListeners() {
    if (elements.themeToggle) {
      elements.themeToggle.addEventListener('click', toggleTheme);
    }

    if (elements.copyEmailBtn) {
      elements.copyEmailBtn.addEventListener('click', () => {
        const email = config.email || 'guilhermeleao92@hotmail.com';
        navigator.clipboard.writeText(email).then(() => {
          showToast('E-mail copiado para a área de transferência');
        }).catch(() => {
          showToast(`E-mail: ${email}`);
        });
      });
    }
  }

  function showToast(message) {
    if (!elements.toast) return;
    if (elements.toastMessage) elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    setTimeout(() => {
      elements.toast.classList.remove('show');
    }, 2500);
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
