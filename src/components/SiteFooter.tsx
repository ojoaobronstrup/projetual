type Props = {
  logoSrc: string
}

export function SiteFooter({ logoSrc }: Props) {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-none">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 sm:px-10 md:px-12 py-14 sm:py-16 max-w-screen-2xl mx-auto font-label text-sm font-medium tracking-wide uppercase">
        <div className="space-y-6">
          <img
            alt="Projetual Engenharia Logo"
            className="h-12 w-auto object-contain"
            src={logoSrc}
          />
          <p className="text-slate-500 dark:text-slate-400 normal-case leading-relaxed max-w-xs">
            Engenharia com precisão técnica e compromisso com a regularidade. Há
            mais de 15 anos transformando projetos em realidade segura.
          </p>
        </div>

        <div className="space-y-6">
          <h6 className="text-blue-900 dark:text-blue-100 font-bold border-b-2 border-orange-400 w-fit pb-1">
            Navegação
          </h6>
          <div className="flex flex-col gap-3">
            <a
              className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              href="#"
            >
              Privacidade
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              href="#"
            >
              Termos de Uso
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              href="#"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h6 className="text-blue-900 dark:text-blue-100 font-bold border-b-2 border-orange-400 w-fit pb-1">
            Redes Sociais
          </h6>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">link</span>
            </a>
          </div>
          <p className="text-slate-400 normal-case pt-4">
            © 2024 Projetual Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

