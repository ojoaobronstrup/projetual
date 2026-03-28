type Props = {
  heroImgSrc: string
  foundersImgSrc: string
}

function FoundersPanel({ src }: { src: string }) {
  return (
    <div className="w-full max-w-[640px] mx-auto lg:ml-auto flex items-center flex-col mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 border border-tertiary-fixed/30 text-tertiary-fixed mb-4">
        <span
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          architecture
        </span>
        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
          Referência em Engenharia
        </span>
      </div>

      <div>
        <img
          alt="Fundadores da Projetual Engenharia"
          className="w-full block object-cover object-bottom"
          style={{ maxHeight: '520px' }}
          src={src}
          loading="lazy"
        />

        <div className="bg-primary-container text-white rounded-b-xl">
          <div className="grid grid-cols-2">
            <a
              className="px-5 py-4 text-center font-bold tracking-tight hover:bg-white/10 transition-colors"
              href="#contato"
            >
              Entre em Contato
            </a>
            <a
              className="px-5 py-4 text-center font-bold tracking-tight hover:bg-white/10 transition-colors"
              href="#servicos"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero({ heroImgSrc, foundersImgSrc }: Props) {
  return (
    <header className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Engenharia e Arquitetura"
          className="w-full h-full object-cover"
          src={heroImgSrc}
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.05] md:leading-[1.1] tracking-tighter">
            ESCRITÓRIO DE ENGENHARIA ESPECIALIZADO EM REGULARIZAÇÕES
          </h1>
          <p className="text-lg sm:text-xl text-on-primary-container max-w-xl leading-relaxed">
            Transformamos burocracia em viabilidade técnica. Soluções precisas
            para projetos residenciais, comerciais e industriais com rigor
            matemático e visão estratégica.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
          <FoundersPanel src={foundersImgSrc} />
        </div>
      </div>
    </header>
  )
}
